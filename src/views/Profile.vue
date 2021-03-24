<template>
		<fragment v-if="user === '...'">
			...
		</fragment>
		<fragment v-else-if="user">
			<div class="profile-view">
				<Action
					:isOwner="$ls.get('id') === user._id"
					:isFriend="user.friends.map(user => user._id).includes($ls.get('id'))"
					@log-out="logOut"
					@send-friend-request="sendFriendRequest"
					@undo-request="undoRequest"
					@remove-friend="removeFriend"
				/>
				<BasicInfo
					:info="user.info"
					:isOwner="$ls.get('id') === user._id"
					@update-info="updateInfo"
				/>
				<Languages />
				<Panel
					:isOwner="$ls.get('id') === user._id"
					:user="user"
					@accept-friend-request="acceptFriendRequest"
					@ignore-friend-request="ignoreFriendRequest"
					@update-info="updateInfo"
				/>
				<Posts
					:isOwner="$ls.get('id') === user._id"
					:accountCreate="user.info.createdAt"
					@add-post="addPost"
				/>
			</div>
		</fragment>
		<fragment v-else>
			<h1 class="title">Nie znaleziono użytkownika!</h1>
			<div class="logo">
				<img class="logo__element" alt="Vue logo" src="@/Assets/logo.svg">
				<img class="logo__element" alt="Vue logo" src="@/Assets/logotype.svg">
			</div>
		</fragment>
</template>

<script>
	import Panel from '@/Components/Profile/Panel'
	import Posts from '@/Components/Profile/Posts'
	import Action from '@/Components/Profile/Action'
	import BasicInfo from '@/Components/Profile/BasicInfo'
	import Languages from '@/Components/Global/Languages'

	export default {
		name: "Profile",
		components: {
			Panel,
			Posts,
			Languages,
			Action,
			BasicInfo
		},
		data() {
			return {
				user: '...',
				uploadProgress: {}
			}
		},
		mounted() {
			this.loadUser(this.$route.params.nick)
		},
		watch: {
			$route(to) {
				this.info = '...'
				this.loadUser(to.params.nick)
			}
		},
		methods: {
			async loadUser(nick) {
				try {
					console.log(this.$i18n.locale)
					const userRes = await this.$axios.get(`/users/profile/${nick}`)
					console.log(userRes)
					const {invitedBy, friends, info, _id} = userRes.data.user;
					const user = {
						invitedBy,
						friends,
						groups: [],
						info,
						_id
					}
					if (user._id === this.$ls.get('id')) {
						const notificationsRes = await this.$axios.get(`/notifications/${user._id}`)
						console.log(notificationsRes.data)
						user.notifications = notificationsRes.data.notifications
					}
					this.user = user
				}
				catch(err) {
					console.log(err.response)
					this.info = null
				}
			},
			logOut() {
				this.$ls.remove('token')
				this.$ls.remove('id')
				this.$ls.remove('nick')
				this.$ls.remove('lang')
				delete this.$axios.defaults.headers.common['auth-token']
				this.$router.push({name: 'Login'})
			},
			async sendFriendRequest() {
				console.log(`Send request to ${this.user._id}`)
				try {
					// Create notification
					const notificationRes = await this.$axios.post('/notifications', {
						type: 'friend-request',
						receiverId: this.user._id
					})
					// Update user data
					await this.$axios.patch(`/users/${this.user._id}/invitedBy/add`, {
						dataId: this.$ls.get('id')
					})
					console.log(notificationRes.data)
				}
				catch (err) {
					console.log(err.response.data)
				}
			},
			async acceptFriendRequest(friendId, notificationId) {
				console.log(`Add ${friendId}, ${this.$ls.get('id')} to friends`)
				try {
					// Pozbądź się zaproszenia
					await this.$axios.patch(`/users/${this.$ls.get('id')}/invitedBy/remove`, {
						dataId: friendId
					})
					// Dodaj do znajomych jednego i drugirgo
					await this.$axios.patch(`/users/${this.$ls.get('id')}/friends/add`, {
						dataId: friendId
					})
					await this.$axios.patch(`/users/${friendId}/friends/add`, {
						dataId: this.$ls.get('id')
					})
					// Utwórz czat i dodaj go znajomym
					const chatRes = await this.$axios.post('/chats', {
						owners: [friendId, this.$ls.get('id')],
						type: 'priv'
					})
					await this.$axios.patch(`/users/${this.$ls.get('id')}/chats/add`, {
						dataId: chatRes.data.chat._id
					})
					await this.$axios.patch(`/users/${friendId}/chats/add`, {
						dataId: chatRes.data.chat._id
					})
					// Zmień status powiadomienia
					const res = await this.$axios.patch(`/notifications/${notificationId}/done`, {data: true})
					if (res.data.success) {
						const index = this.user.notifications.findIndex(notification => notification._id === notificationId)
						this.user.notifications[index].done = true
						this.user.friends.push(res.data.notification.sender)
					}
					console.log(res.data)
				}
				catch(err) {
					console.log(err.response.data)
				}
			},
			async ignoreFriendRequest(notificationId) {
				console.log(`Delete notification by id: ${notificationId}`)
				try {
					const res = await this.$axios.patch(`/notifications/${notificationId}/done`, {data: true})
					if (res.data.success) {
						const index = this.user.notifications.findIndex(notification => notification._id === notificationId)
						this.user.notifications[index].done = true
					}
					console.log(res.data)
				}
				catch(err) {
					console.log(err)
				}
			},
			async updateInfo(key, data) {
				// console.log(key, data)
				try {
					const res = await this.$axios.patch(`/users/profile/me/update-info/${key}`, {data})
					if (res.data.success) {
						this.user.info[key] = data
					}
					console.log(res.data)
				}
				catch(err) {
					console.log(err)
				}
			},
			async undoRequest() {
				console.log('undo request')
			},
			async removeFriend() {
				console.log('remove friend')
			},
			async changeAvatar() {
				console.log('change avatar')
			},
			async addPost(content) {
				console.log(`Add post: "${content}"`)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.profile-view {
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 10px;
		.logo {
			max-width: 100%;
			display: flex;
			flex-direction: column;
			.logo__element {
				max-width: 100%;
			}
		}
		.actions {
			display: flex;
			margin-bottom: 10px;
		}
	}
</style>