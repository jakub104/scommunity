<template>
	<div class="friends-wrapper">
		<div v-if="friends.length" class="search">
			<fa-icon class="search__icon" icon="search" />
			<input class="search__input" type="search" :placeholder="$t('profile.friends.search')" />
		</div>
		<div class="friends">
			<fragment v-if="friends.length">
				<div v-for="friend in friends" :key="friend._id" class="friend">
					<router-link class="friend__avatar" :to="{name: 'Profile', params: {nick: friend.info.nick}}" v-bg:cover.center="friend.info.avatar" />
					<div class="friend__name">{{friend.info.nick}}</div>
					<router-link v-if="isOwner" class="friend__action" :to="{name: 'Chat', params: {id: getChatId(friend.chats)}}">
						<fa-icon class="action__icon" icon="comment-alt" />
					</router-link>
				</div>
				<router-link :to="{name: 'Users'}" class="friends__add">
					<fa-icon icon="plus" />
				</router-link>
			</fragment>
			<fragment v-else>
				<div v-if="isOwner" class="friends__empty">
					<div class="empty__content">{{$t('profile.friends.empty.owner.content')}}</div>
					<Button :content="$t('profile.friends.empty.owner.button')" small />
				</div>
				<div v-else class="friends__empty">
					<div class="empty__content">{{$t('profile.friends.empty.guest.content')}}</div>
					<Button :content="$t('profile.friends.empty.guest.button')" small @click="inviteFriend(_id)" />
				</div>
			</fragment>
		</div>
	</div>
</template>

<script>
	import Button from '@/Components/Global/Button'
	export default {
		name: "Friends",
		components: {
			Button
		},
		props: {
			friends: Array,
			isOwner: Boolean,
			_id: String
		},
		data() {
			return {
				
			}
		},
		methods: {
			inviteFriend(uid) {
				console.log(`Send friend request to ${uid}...`)
			},
			getChatId(chats) {
				const index = chats.findIndex(chat => chat.type === 'priv' && chat.owners.includes(this.$ls.get('id')))
				return chats[index]._id
			}
		}
	}
</script>

<style lang="scss" scoped>
	.friends-wrapper {
		height: 300px;
		.search {
			position: relative;
			margin: 10px 0;
			.search__icon {
				position: absolute;
				top: 50%;
				left: 10px;
				transform: translateY(-50%);
				margin-right: 5px;
			}
			.search__input {
				width: 100%;
				background: $selected;
				padding: 7px 10px 7px 35px;
				border-radius: 10px;
				color: $primary;
				font-size: 16px;
				&::placeholder {
					color: $secondary;
					transition: 0.2s ease;
				}
				&:focus {
					&::placeholder {
						opacity: 0;
						letter-spacing: 1px;
					}
				}
			}
		}
		.friends {
			height: calc(100% - 50px);
			@include scroll;
			.friend {
				position: relative;
				display: flex;
				align-items: center;
				background-color: $bg;
				padding: 15px;
				border-radius: 10px;
				margin: 10px 0;
				.friend__avatar {
					width: 40px;
					height: 40px;
					background-color: $secondary;
					border-radius: 40%;
				}
				.friend__name {
					width: calc(100% - 90px);
					margin: 0 10px;
					font-weight: bold;
					@include ellipsis;
					&::first-letter {
						color: $decorative;
					}
				}
				.friend__action {
					display: flex;
					.action__icon {
						margin: 5px;
						color: $decorative;
						transition: 0.2s ease;
						@include hover {
							opacity: 0.7;
						}
					}
				}
			}
			.friends__add {
				position: absolute;
				bottom: 20px;
				right: 20px;
				width: 35px;
				height: 35px;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: $decorative;
				font-size: 16px;
				color: $bg;
				border-radius: 50%;
				opacity: 1;
				transition: all 0.1s ease;
				@include hover {
					transform: scale(1.1);
				}
			}
			.friends__empty {
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				background-color: $bg;
				padding: 15px;
				border-radius: 10px;
				margin: 10px 0;
				.empty__content {
					margin: 5px 0;
				}
			}
		}
	}
</style>