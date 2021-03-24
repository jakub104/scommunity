<template>
	<div class="notifications-wrapper">
		<fragment v-if="notifications.length">
			<div v-for="notification in notifications" :key="notification._id" class="notification">
				<router-link class="notification__img" :to="{name: 'Profile', params: {nick: notification.sender.info.nick}}" v-bg:cover.center="notification.sender.info.avatar" />
				<div class="notification__content">
					<strong>{{notification.sender.info.nick}}</strong> {{$t(`profile.notifications.${notification.type}.content`)}}
					<div v-if="notification.type === 'friend-request' && !notification.done" class="content__actions">
						<div class="content__action" @click="$emit('accept-friend-request', notification.sender._id, notification._id)">{{$t(`profile.notifications.${notification.type}.actions.accept`)}}</div>
						<div class="content__action" @click="$emit('ignore-friend-request', notification._id)">{{$t(`profile.notifications.${notification.type}.actions.ignore`)}}</div>
					</div>
				</div>
			</div>
		</fragment>
		<fragment v-else>
			Brak powiadomień
		</fragment>
	</div>
</template>

<script>
	export default {
		name: "Notifications",
		props: {
			notifications: Array,
			isOwner: Boolean
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.notifications-wrapper {
		height: 300px;
		@include scroll;
		.notification {
			position: relative;
			display: flex;
			align-items: center;
			background-color: $bg;
			padding: 15px;
			border-radius: 10px;
			margin: 10px 0;
			@include hover {
				cursor: default;
				.notification__delete {
					display: block;
				}
			}
			.notification__img {
				display: block;
				width: 40px;
				height: 40px;
				margin-right: 10px;
				border-radius: 40%;
			}
			.notification__content {
				width: calc(100% - 50px);
				font-size: 14px;
				.content__actions {
					width: 100%;
					display: flex;
					/* justify-content: center; */
					.content__action {
						background-color: $selected;
						margin: 5px 10px 5px 0;
						padding: 3px 5px;
						border-radius: 5px;
						transition: 0.2s ease;
						@include hover {
							background-color: $dark;
						}
					}
				}
			}
		}
	}
</style>