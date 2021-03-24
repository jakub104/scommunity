<template>
	<div :class="['chats-preview-wrapper', {'chats-preview-wrapper--collapse': collapse}]">
		<div class="wrapper-expand" @click="collapse = !collapse">
			<fa-icon class="expand__icon" v-if="collapse" icon="angle-right" />
			<fa-icon class="expand__icon" v-else icon="angle-left" />
		</div>
		<div class="chats-preview" v-if="chats.length > 0">
			<router-link :class="['chat', {'chat--active': $route.params.id === chat._id}]" :to="{name: 'Chat', params: {id: chat._id}}" v-for="chat in chats" :key="chat._id">
				<img class="chat__img" :src="chat.img || getChat(chat.owners).avatar" :alt="getChat(chat.owners).nick">
				<div class="chat__info">
					<h2 class="info__name">{{chat.name || getChat(chat.owners).nick}}</h2>
					<div class="info__message" v-if="chat.lastMessage">
						<span v-if="chat.lastMessage.sender === $ls.get('id')">Ty: </span>{{chat.lastMessage.content}} lorem impsum
						<div class="message__date">{{$dayjs(chat.lastMessage.createdAt).fromNow()}}</div>
					</div>
					<div class="info__message" v-else>
						.
						<div class="message__date">{{$dayjs(chat.createdAt).fromNow()}}</div>
					</div>
				</div>
			</router-link>
		</div>
		<div class="chats-loader" v-else>
			...
		</div>
	</div>
</template>

<script>
	export default {
		name: "ChatsPreview",
		props: {
			chats: Array
		},
		data() {
			return {
				collapse: false,
			}
		},
		watch: {
			$route() {
				if (window.innerWidth <= 600) {
					this.collapse = true
				}
			}
		},
		methods: {
			getChat(owners) {
				const owner = owners.find(owner => owner._id !== this.$ls.get('id'));
				return owner.info
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chats-preview-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 300px;
		height: 100%;
		background-color: $bg;
		margin-right: 20px;
		padding: 10px;
		border-right: 3px solid $selected;
		transition: 0.5s ease;
		z-index: 4;
		@media (min-width: 700px) {
			position: relative;
		}
		&--collapse {
			width: 0;
			@media (min-width: 700px) {
				width: 87px;
			}
		}
		.wrapper-expand {
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(200%, -50%);
			width: 10px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: $bg;
			font-size: 22px;
			color: $decorative;
			.expand__icon {
				transition: 0.2s ease;
			}
			@include hover {
				.expand__icon {
					opacity: 0.7;
				}
			}
		}
		.chats-preview {
			width: 100%;
			height: 100%;
			@include scroll;
			overflow-x: hidden;
			.chat {
				width: 100%;
				display: flex;
				align-items: center;
				padding: 10px;
				margin: 5px 0;
				margin-right: 5px;
				transition: 0.3s ease;
				border-left: 3px solid $bg;
				border-radius: 10px;
				@include hover {
					background-color: $dark;
				}
				.chat__img {
					width: 40px;
					height: 40px;
					border-radius: 40%;
					margin-right: 10px;
					background-color: $selected;
					object-fit: cover;
				}
				.chat__info {
					position: relative;
					width: calc(100% - 50px);
					.info__name {
						font-size: 18px;
						margin: 0 0 5px 0;
						@include ellipsis;
						&::first-letter {
							color: $decorative;
						}
					}
					.info__message {
						font-size: 14px;
						@include ellipsis;
						width: 70%;
						.message__date {
							position: absolute;
							bottom: 0;
							right: 0;
							color: $secondary;
							width: 30%;
							@include ellipsis;
						}
					}
				}
			}
			.chat--active {
				border-left: 3px solid $decorative;
				background-color: $dark;
				cursor: default;
			}
		}
		.chats-loader {
			text-align: center;
		}
	}
</style>