<template>
	<div class="action-wrapper">
		<fragment v-if="isOwner">
			<div class="action" @click="$emit('log-out')">
				<fa-icon class="action__icon" icon="sign-out-alt" />
			</div>
		</fragment>
		<fragment v-else-if="isFriend">
			<div class="action" @click="$emit('remove-friend')">
				<fa-icon class="action__icon" icon="user-minus" />
			</div>
		</fragment>
		<fragment v-else-if="!isFriend">
			<div class="action" @click="$emit('send-friend-request')">
				<fa-icon class="action__icon" icon="user-plus" />
			</div>
		</fragment>
		<fragment v-else>
			<div class="profile__action" @click="$emit('undo-request')">
				<fa-icon class="action__icon" icon="user-minus" />
			</div>
		</fragment>
	</div>
</template>

<script>
	export default {
		name: "Action",
		props: {
			isOwner: Boolean,
			isFriend: Boolean
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.action-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		.action {
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10px;
			background-color: $decorative;
			border-radius: 50%;
			transition: all 0.3s ease;
			@include hover {
				opacity: 0.7;
			}
			.action__icon {
				color: $bg;
				font-size: 16px;
			}
		}
	}
</style>