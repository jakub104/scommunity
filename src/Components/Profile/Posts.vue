<template>
	<div class="posts-wrapper">
		<h2 class="posts__title">{{$t('profile.activity.name')}}</h2>
		<div class="posts__create" v-if="isOwner">
			<textarea class="create__input" :placeholder="$t('profile.activity.add.placeholder', {nick: $route.params.nick})" v-model="postContent" />
			<Button :content="$t('profile.activity.add.submit')" type="submit" small @click="submitPost" />
		</div>
		<div class="posts">
			<div class="post">
				<img class="post__img" :src="join" />
				<div class="post__content">{{$t('profile.activity.joined', {nick: $route.params.nick})}}</div>
				<div class="post__date">{{$dayjs(accountCreate).format('DD.MM.YYYY')}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Button from '@/Components/Global/Button'
	import join from '@/Assets/icons/join.svg'
	export default {
		name: "Posts",
		components: {
			Button
		},
		props: {
			isOwner: Boolean,
			accountCreate: String
		},
		data() {
			return {
				postContent: '',
				join
			}
		},
		methods: {
			submitPost() {
				this.$emit('add-post', this.postContent);
				alert('Ta opcja jest jeszcze niedostępna')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.posts-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.posts__title {
			margin: 20px 0;
			@include line;
		}
		.posts__create {
			padding: 20px;
			width: 100%;
			max-width: 1000px;
			display: flex;
			align-items: center;
			flex-direction: column;
			background-color: $dark;
			border-radius: 20px;
			.create__input {
				width: 100%;
				max-width: 800px;
				height: 80px;
				margin-bottom: 10px;
				background-color: $selected;
				color: $primary;
				font-size: 16px;
				padding: 10px 15px 0 15px;
				border-bottom: 10px solid $selected;
				border-radius: 10px;
				transition: all 0.3s ease;
				outline: none;
				@include scroll;
				&::placeholder {
					transition: 0.3s ease;
					color: $secondary;
				}
				&:focus {
					&::placeholder {
						opacity: 0;
						letter-spacing: 1px;
					}
				}
			}
		}
		.posts {
			width: 100%;
			max-width: 1000px;
			.post {
				position: relative;
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				background-color: $dark;
				margin: 10px 0;
				padding: 20px;
				border-radius: 20px;
				.post__date {
					/* position: absolute; */
					/* top: 10px; */
					/* right: 10px; */
					/* color: $secondary; */
					font-size: 14px;
				}
				.post__img {
					height: 50px;
				}
				.post__content {
					font-weight: bold;
					font-size: 20px;
					margin: 10px 0;
					&::first-letter {
						color: $decorative;
					}
				}
			}
		}
	}
</style>