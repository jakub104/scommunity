<template>
	<div class="private-chat-wrapper">
		<ChatsPreview :chats="chats" />
		<MainChat
			:chat="chat"
			:messages="messages"
			:newMessages="newMessages"
			:replyTo="replyTo"
			:writers="writers"
			@send-message="sendMessage"
			@reply="reply"
			@undo-reply="undoReply"
		/>
	</div>
</template>

<script>
	// import messages from '@/Assets/messages.json'
	import ChatsPreview from '@/Components/Chat/ChatsPreview'
	import MainChat from '@/Components/Chat/MainChat'
	import debounce from 'debounce'
	export default {
		name: "PrivateChat",
		components: {
			ChatsPreview,
			MainChat
		},
		data() {
			return {
				chats: [],
				chat: {},
				messages: [],
				newMessages: [],
				replyTo: '',
				skip: 0,
				writers: [
					// {
					// 	nick: 'Jakub',
					// 	avatar: 'https://szulcus.pl/avatar.jpg'
					// }
				]
			}
		},
		destroyed() {
			this.$socket.off('message');
		},
		created() {
			this.$socket.on('message', (data, chatId) => {
				if (chatId === this.chat._id) {
					console.log('Send: ', data, chatId)
					this.newMessages.unshift(data.message)
				}
			})
			this.$socket.on('writing', (user) => {
				this.addWriter(user)
			})
		},
		async mounted() {
			try {
				// Get chats
				const chatsRes = await this.$axios.get('/chats/user/me')
				const compare = (a, b) => {
					const aValue = Number(new Date(a.lastMessage ? a.lastMessage.createdAt : a.createdAt))
					const bValue = Number(new Date(b.lastMessage ? b.lastMessage.createdAt : b.createdAt))
					console.log(aValue, bValue)
					if (aValue < bValue) {
						return 1
					}
					else if (aValue > bValue) {
						return -1
					}
					else {
						return 0
					}
				}
				const chats = chatsRes.data.chats
				console.log(chats)
				this.chats = chats.sort(compare)
				this.loadChat()
			}
			catch(err) {
				console.log(err.response.data)
			}
		},
		watch: {
			$route() {
				this.chat = {}
				this.newMessages = []
				this.loadChat()
			}
		},
		methods: {
			async loadChat() {
				// Get chat
				const chatRes = await this.$axios.get(`/chats/${this.$route.params.id}`)
				this.chat = chatRes.data.chat

				// Get messages
				const groupedMessages = chatRes.data.messages.reduce((results, message) => {
					const date = this.$dayjs(message.createdAt).get('year') === this.$dayjs().get('year') ? this.$dayjs(message.createdAt).format('D MMMM') : this.$dayjs(message.createdAt).format('D MMMM YYYY');
					(results[date] = results[date] || []).push(message);
					return results;
				}, {})
				this.messages = Object.entries(groupedMessages)
			},
			async sendMessage() {
				const element = document.getElementById('answer__input')
				const content = element.innerText.trim()
				if (content) {
					try {
						element.innerHTML = ''
						const res = await this.$axios.patch(`/chats/${this.chat._id}/message/add`, {
							content,
							sender: this.$ls.get('id')
						})
						this.$socket.emit('message', res.data, this.chat._id)
					}
					catch (err) {
						console.log(err.response.data)
					}
				}
			},
			reply(userId) {
				this.replyTo = userId
			},
			undoReply() {
				this.replyTo = ''
			},
			addWriter(user) {
				if (!this.writers.map(writer => writer.nick).includes(user.nick)) {
					this.writers.push(user)
				}
				this.removeWriter(user.nick)
			},
			removeWriter: debounce(function(userNick) {
				this.writers = this.writers.filter(writer => writer.nick !== userNick)
			}, 1000),
		}
	}
</script>

<style lang="scss" scoped>
	.private-chat-wrapper {
		width: 100%;
		height: 100%;
		max-width: 1200px;
		display: flex;
		/* flex-direction: column; */
		
	}
</style>