<template>
	<div class="main-chat-wrapper" v-if="chat.owners">
		<div v-if="chat.name && chat.img" class="chat__title">
			<img class="title__img" :src="chat.img" />
			<h1 class="title__name">{{chat.name}}</h1>
		</div>
		<div v-else class="chat__title">
			<img class="title__img" :src="getFriendInfo().avatar" />
			<h1 class="title__name">{{getFriendInfo().nick}}</h1>
		</div>
		<div class="messages">
			<fragment v-if="messages.length > 0 || newMessages.length > 0">
				<div class="messages__group" v-if="newMessages.length > 0">
					<div :class="['message', {'message--owner': message.sender === $ls.get('id')}]" v-for="message in newMessages" :key="message._id" @dblclick="$emit('reply', message.sender)">
						<img class="message__sender" v-if="message.sender !== $ls.get('id')" :src="getUserInfo(message.sender).avatar" :alt="getUserInfo(message.sender).nick" />
						<div class="message__content">{{message.content}}</div>
						<div class="message__time">{{$dayjs(message.createdAt).format('H:mm')}}</div>
					</div>
					<div class="group__title">Teraz</div>
				</div>
				<div class="messages__group" v-for="group in messages" :key="group[0]">
					<div :class="['message', {'message--owner': message.sender === $ls.get('id')}]" v-for="message in group[1]" :key="message._id" @dblclick="$emit('reply', message.sender)">
						<img class="message__sender" v-if="message.sender !== $ls.get('id')" :src="getUserInfo(message.sender).avatar" :alt="getUserInfo(message.sender).nick" />
						<div class="message__content">{{message.content}}</div>
						<div class="message__time">{{$dayjs(message.createdAt).format('H:mm')}}</div>
					</div>
					<div class="group__title">{{group[0]}}</div>
				</div>
			</fragment>
			<fragment v-else>
				<div class="messages__group">
					<div class="group__title">
						Brak wiadomości
					</div>
				</div>
			</fragment>
		</div>
		<div class="writers" v-if="writers.length > 0">
			<img class="writer" :src="writer.avatar" v-for="writer in writers" :key="writer.nick" />
			<div class="dotts">
				<div class="dott" />
				<div class="dott" />
				<div class="dott" />
			</div>
		</div>
		<div v-if="replyTo" class="reply">
			<div class="reply__user">
				<fa-icon icon="reply" /> {{getUserInfo(replyTo).nick}}
			</div>
			<div class="reply__undo" @click="$emit('undo-reply')">
				<fa-icon icon="times" />
			</div>
		</div>
		<form class="answer" @submit.prevent="$emit('send-message')">
			<button class="answer__button" type="submit">
				<fa-icon icon="paper-plane" />
			</button>
			<span class="answer__input" role="textbox" id="answer__input" data-placeholder="Napisz coś..." contenteditable @paste="clearHtml" @keypress.enter="checkKey" @input="$socket.emit('writing', getUserInfo($ls.get('id')))" />
			<button class="answer__button" type="submit">
				<fa-icon icon="sticky-note" />
			</button>
			<button class="answer__button" type="submit">
				<fa-icon icon="image" />
			</button>
		</form>
	</div>
</template>

<script>
	import isMobile from 'is-mobile'
	export default {
		name: "MainChat",
		props: {
			chat: Object,
			messages: Array,
			newMessages: Array,
			replyTo: String,
			writers: Array
		},
		methods: {
			getUserInfo(userId) {
				const index = this.chat.owners.findIndex(owner => owner._id === userId)
				return this.chat.owners[index].info
			},
			getFriendInfo() {
				return this.chat.owners.filter(owner => owner._id !== this.$ls.get('id'))[0].info
			},
			clearHtml(e) {
				// cancel paste
				e.preventDefault();
				// get text representation of clipboard
				var text = (e.originalEvent || e).clipboardData.getData('text/plain');
				// insert text manually
				document.execCommand("insertHTML", false, text);
			},
			checkKey(e) {
				if (!e.shiftKey && !isMobile()) {
					this.$emit('send-message')
					e.preventDefault()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.main-chat-wrapper {
		flex: 1;
		min-width: 300px;
		/* background-color: red; */
		height: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 30px;
		.chat__title {
			display: flex;
			align-items: center;
			.title__name {
				font-size: 25px;
				font-size: 25px;
				margin: 0;
				@include ellipsis;
				&::first-letter {
					color: $decorative;
				}
			}
			.title__img {
				width: 50px;
				height: 50px;
				object-fit: cover;
				border-radius: 40%;
				margin-right: 10px;
			}
		}
		.messages {
			width: 100%;
			flex: 1;
			display: flex;
			flex-direction: column-reverse;
			border: 10px solid transparent;
			/* background-color: red; */
			overflow: hidden;
			@include scroll;
			.messages__group {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;
				width: 100%;
				.group__title {
					color: $secondary;
				}
			}
			.message {
				max-width: 80%;
				position: relative;
				display: flex;
				align-items: flex-end;
				margin: 5px auto 5px 0;
				.message__sender {
					width: 30px;
					height: 30px;
					object-fit: cover;
					border-radius: 40%;
					margin-right: 10px;
				}
				.message__content {
					background-color: rgb($secondary, 0.5);
					padding: 5px 10px;
					border-radius: 10px;
					white-space: pre;
					&:hover {
						~ .message__time {
							opacity: 1;
						}
					}
				}
				.message__time {
					position: absolute;
					top: 50%;
					right: -50px;
					transform: translateY(-50%);
					color: $secondary;
					opacity: 0;
					transition: 0.2s ease;
				}
				&--owner {
					margin: 5px 0 5px auto;
					.message__content {
						background-color: rgb($decorative, 0.5);
					}
					.message__time {
						right: auto;
						left: -50px;
					}
				}
			}
		}
		.reply {
			width: 100%;
			display: flex;
			justify-content: space-between;
			color: $primary;
			/* background-color: $strong; */
			border-top: 3px solid $decorative;
			/* border-bottom: 3px solid $decorative; */
			padding: 5px;
			text-align: right;
			animation: opacity 0.3s ease;
			.reply__user {
				max-width: 70%;
				@include ellipsis;
			}
			.reply__undo {
				@include hover {
					opacity: 0.7;
				}
			}
		}
		.answer {
			width: 100%;
			min-height: 30px;
			display: flex;
			flex-direction: row-reverse;
			align-items: flex-end;
			.answer__button {
				width: 40px;
				height: 100%;
				background: none;
				border: none;
				font-size: 25px;
				line-height: 30px;
				padding: 0;
				color: $decorative;
				transition: all 0.3s ease;
				@include hover {
					opacity: 0.7;
				}
			}
			.answer__input {
				width: calc(100% - 120px);
				max-height: 100px;
				min-height: 40px;
				background-color: $selected;
				color: $primary;
				font-size: 16px;
				padding: 10px 15px 0 15px;
				border-bottom: 10px solid $selected;
				border-radius: 10px;
				outline: none;
				transition: all 0.3s ease;
				z-index: 3;
				line-height: 20px;
				@include scroll;
				&:empty:before {
					content: attr(data-placeholder);
					color: $secondary;
					transition: 0.2s ease;
					cursor: text;
				}
				&:focus:before {
					opacity: 0;
					letter-spacing: 2px;
				}
				&:not(:empty) {
					width: calc(100% - 40px);
					~ .answer__button {
						/* display: none; */
						opacity: 0;
						width: 0;
						transform: scale(0.5);
					}
				}
			}
		}
		.writers {
			display: flex;
			margin: 10px;
			.writer {
				width: 20px;
				height: 20px;
				background-color: $selected;
				border-radius: 40%;
				margin-right: 5px;
			}
			.dotts {
				display: flex;
				background-color: $selected;
				justify-content: center;
				align-items: center;
				margin-left: 5px;
				padding: 5px;
				border-radius: 10px;
				.dott {
					width: 4px;
					height: 4px;
					background-color: $secondary;
					margin: 2px;
					border-radius: 50%;
					&:nth-child(1) {
						animation: dottUp 1s both infinite;
					}
					&:nth-child(2) {
						animation: dottUp 1s 0.1s both infinite;
					}
					&:nth-child(3) {
						animation: dottUp 1s 0.2s both infinite;
					}
				}
			}
		}
	}
</style>