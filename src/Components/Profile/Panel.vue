<template>
	<div class="panel__component">
		<div class="panel__nav">
			<div :class="['nav__item', {'nav__item--active': activePart === 'friends'}]" @click="mobile && (activePart = 'friends')">
				<fa-icon class="item__icon" icon="users" />
			</div>
			<div :class="['nav__item', {'nav__item--active': activePart === 'groups'}]" @click="mobile && (activePart = 'groups')">
				<fa-icon class="item__icon" icon="comments" />
			</div>
			<div :class="['nav__item', {'nav__item--active': activePart === 'info'}]" @click="mobile && (activePart = 'info')">
				<fa-icon class="item__icon" icon="address-card" />
			</div>
			<div :class="['nav__item', {'nav__item--active': activePart === 'notifications'}]" @click="mobile && (activePart = 'notifications')" v-if="isOwner">
				<fa-icon class="item__icon" icon="bell" />
			</div>
		</div>
		<div :class="['panel__parts', {'panel__parts--owner': isOwner}]">
			<div class="part" v-if="!mobile || activePart === 'friends'">
				<h2 class="content__title">{{$t(`profile.friends.name`)}}</h2>
				<Friends
					:friends="user.friends"
					:isOwner="isOwner"
					:_id="user._id"
				/>
			</div>
			<div class="part" v-if="!mobile || activePart === 'groups'">
				<h2 class="content__title">{{$t(`profile.groups.name`)}}</h2>
				<Groups
					:groups="user.groups"
					:isOwner="isOwner"
					:_id="user._id"
				/>
			</div>
			<div class="part" v-if="!mobile || activePart === 'info'">
				<h2 class="content__title">{{$t(`profile.info.name`)}}</h2>
				<Info
					:info="user.info"
					:isOwner="isOwner"
					:_id="user._id"
					@update-info="(key, data) => $emit('update-info', key, data)"
				/>
			</div>
			<div class="part" v-if="(!mobile || activePart === 'notifications') && isOwner">
				<h2 class="content__title">{{$t(`profile.notifications.name`)}}</h2>
				<Notifications
					:notifications="user.notifications"
					:isOwner="isOwner"
					:_id="user._id"
					@accept-friend-request="(friendId, notificationId) => $emit('accept-friend-request', friendId, notificationId)"
					@ignore-friend-request="(notificationId) => $emit('ignore-friend-request', notificationId)"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import Notifications from '@/Components/Profile/Notifications'
	import Friends from '@/Components/Profile/Friends'
	import Groups from '@/Components/Profile/Groups'
	import Info from '@/Components/Profile/Info'
	export default {
		name: "Panel",
		components: {
			Notifications,
			Friends,
			Groups,
			Info
		},
		props: {
			isOwner: Boolean,
			user: Object,
		},
		data() {
			return {
				mobile: window.innerWidth < 1200,
				activePart: 'friends'
			}
		},
		mounted() {
			window.addEventListener('resize', (e) => {
				if (e.target.innerWidth < 1200 && !this.mobile) {
					this.mobile = true
				}
				else if (e.target.innerWidth > 1200 && this.mobile) {
					this.mobile = false
				}
			})
		},
		beforeDestroy() {
			window.removeEventListener('resize', (e) => {
				if (e.target.innerWidth < 1200 && !this.mobile) {
					this.mobile = true
				}
				else if (e.target.innerWidth > 1200 && this.mobile) {
					this.mobile = false
				}
			});
		},
		methods: {
			setActivePart (index) {
				this.activePart = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	.panel__component {
		position: relative;
		width: 100%;
		max-width: 1500px;
		margin: 30px 0;
		.panel__nav {
			position: absolute;
			top: 0;
			left: 0;
			transform: translateY(-50%);
			width: 100%;
			display: flex;
			justify-content: center;
			z-index: 2;
			@media (min-width: 1200px) {
				justify-content: space-around;
				.nav__item {
					opacity: 1;
				}
			}
			.nav__item {
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: $dark;
				border-radius: 50%;
				border: 4px solid $bg;
				color: $decorative;
				margin: 0 5px;
				transition: 0.2s ease;
				@media (max-width: 1200px) {
					.item__icon {
						opacity: 0.7;
						transition: 0.2s ease;
					}
					@include hover {
						.item__icon {
							opacity: 1;
						}
					}
				}
			}
			.nav__item--active {
				.item__icon {
					opacity: 1;
				}
			}
		}
		.panel__parts {
			display: flex;
			@media (min-width: 1200px) {
				display: flex;
			}
			.part {
				flex: 1;
				/* width: 100%; */
				position: relative;
				background-color: $dark;
				padding: 20px;
				margin: 0;
				border-radius: 20px;
				@media (min-width: 1200px) {
					margin: 0 10px;
				}
				.content__title {
					font-size: 20px;
					margin: 10px 0 5px 0;
					text-align: center;
				}
			}
		}
		.panel__parts--owner {
			grid-template-columns: repeat(4, 1fr);
		}
		.panel__parts--mobile {
			display: block;
			@media (min-width: 1200px) {
				display: none;
			}
			.part__icons {
				.part__icon {
					svg {
						opacity: 0.7;
						transition: 0.2s ease;
					}
					@include hover {
						svg {
							opacity: 1
						}
					}
				}
				.part__icon--active svg {
					opacity: 1;
				}
			}
		}
	}
</style>