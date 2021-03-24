<template>
	<div class="groups-wrapper">
		<div v-if="groups.length" class="search">
			<fa-icon class="search__icon" icon="search" />
			<input class="search__input" type="search" placeholder="Szukaj" />
		</div>
		<div class="groups">
			<fragment v-if="groups.length">
				<div v-for="group in groups" :key="group._id" class="group">
					<router-link class="group__avatar" :to="{name: 'Profile', params: {nick: group.nick}}" v-bg:cover.center="'https://szulcus.pl/avatar.jpg'" />
					<div class="group__name">{{group.nick}}</div>
					<router-link v-if="isOwner" class="group__action" :to="{name: 'PrivateChat', params: {nick: group.nick}}">
						<fa-icon class="action__icon" icon="comment-alt" />
					</router-link>
					<div v-else class="group__action" @click="sendgroupRequest(group._id)">
						<fa-icon class="action__icon" icon="user-plus" />
					</div>
				</div>
				<router-link :to="{name: 'Users'}" class="groups__add">
					<fa-icon icon="plus" />
				</router-link>
			</fragment>
			<fragment v-else>
				<div v-if="isOwner" class="groups__empty">
					<div class="empty__content">{{$t('profile.groups.empty.owner.content')}}</div>
					<Button :content="$t('profile.groups.empty.owner.button')" small />
				</div>
				<div v-else class="groups__empty">
					<div class="empty__content">{{$t('profile.groups.empty.guest.content')}}</div>
					<Button :content="$t('profile.groups.empty.guest.button')" small />
				</div>
			</fragment>
		</div>
	</div>
</template>

<script>
	import Button from '@/Components/Global/Button'
	export default {
		name: "Groups",
		components: {
			Button
		},
		props: {
			groups: Array,
			isOwner: Boolean
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.groups-wrapper {
		height: 300px;
		@include scroll;
		.search {
			position: relative;
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
				&::placeholder {
					color: $secondary;
					transition: 0.2s ease;
				}
				&:focus {
					&::placeholder {
						opacity: 0;
						letter-spacing: 3px;
					}
				}
			}
		}
		.groups {
			.group {
				position: relative;
				display: flex;
				align-items: center;
				background-color: $bg;
				padding: 15px;
				border-radius: 10px;
				margin: 10px 0;
				.group__avatar {
					width: 40px;
					height: 40px;
					background-color: $secondary;
					border-radius: 40%;
				}
				.group__name {
					width: calc(100% - 90px);
					margin: 0 10px;
					font-weight: bold;
					@include ellipsis;
					&::first-letter {
						color: $decorative;
					}
				}
				.group__action {
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
			.groups__add {
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
			.groups__empty {
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