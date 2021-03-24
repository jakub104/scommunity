<template>
	<div class="basic-info-wrapper">
		<h1 class="title">{{info.nick}}</h1>
		<div class="user-info">
			<div :class="['avatar', {'avatar--edited': isOwner}]" v-bg:cover.center="info.avatar" @click="(e) => e.target.nextSibling.click()" />
			<input type="file" class="file-input" id="file-input" @click="changeAvatar" >
			<div :class="['biogram', {'biogram--owner': isOwner}]">
				<textarea v-model="updatedBiogram" :readonly="!isOwner" spellcheck="false" class="biogram__text"></textarea>
				<div v-if="updatedBiogram !== info.biogram" class="biogram__submit" @click="$emit('update-info', 'biogram', updatedBiogram)">
					<fa-icon class="submit__icon" icon="check" />
				</div>
				<div class="line" />
				<div class="biogram__limit">{{info.biogram.length}} / 300</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BasicInfo",
		props: {
			info: Object,
			isOwner: Boolean
		},
		data() {
			return {
				updatedBiogram: JSON.parse(JSON.stringify(this.info.biogram))
			}
		},
		methods: {
			changeAvatar() {
				alert('Ta funkcja jest jeszcze niedostepna')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.basic-info-wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			font-size: 30px;
			margin: 0 0 20px 0;
			&::first-letter {
				color: $decorative;
			}
		}
		.user-info {
			width: 100%;
			max-width: 800px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			@media (min-width: 600px) {
				flex-direction: row;
			}
			.avatar {
				position: relative;
				width: 150px;
				height: 150px;
				border-radius: 40%;
				margin: 0 auto;
			}
			.avatar--edited {
				&::after {
					content: '\f302';
					font-family: 'Font Awesome 5 Free';
					font-weight: bold;
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $strong;
					opacity: 0;
					border-radius: 50px;
					font-size: 40px;
					transition: 0.2s ease;
				}
				@include hover() {
					&::after {
						opacity: 0.7;
					}
				}
			}
			.file-input {
				display: none;
			}
			.biogram {
				position: relative;
				width: 100%;
				height: 120px;
				margin: 20px 0;
				&::before {
					content: '\f10e';
					font-family: 'Font Awesome 5 Free';
					font-weight: bold;
					position: absolute;
					top: -10px;
					left: -10px;
					color: $decorative;
				}
				.biogram__text {
					width: 100%;
					height: 100%;
					color: $primary;
					background-color: $dark;
					border-radius: 20px;
					resize: none;
					transition: all 0.2s ease;
					text-align: left;
					border: 15px solid $dark;
					font-size: 16px;
					line-height: 20px;
					@include scroll;
				}
				.biogram__submit {
					position: absolute;
					bottom: -3px;
					right: -3px;
					width: 40px;
					height: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $dark;
					border-radius: 50%;
					border: 4px solid $bg;
					transform: translate(25%, 25%);
					animation: biogramBounce 0.3s both;
					transition: 0.2s ease;
					.submit__icon {
						color: $decorative;
					}
					@include hover {
						background-color: $selected;
					}
				}
				.biogram__limit {
					position: absolute;
					bottom: 0;
					left: 0;
					transform: translateY(50%);
					padding: 5px;
					font-size: 10px;
					border-radius: 10px;
					color: $secondary;
					background-color: $dark;
					border: 3px solid $bg;
					font-weight: bold;
					letter-spacing: 0.5px;
				}
				.line {
					position: absolute;
					top: 50%;
					right: -10px;
					height: 30%;
					width: 3px;
					transform: translateY(-50%);
					background-color: $decorative;
					transition: all 0.2s ease;
					border-radius: 3px;
				}
				@media (min-width: 600px) {
					width: calc(100% - 200px);
				}
			}
			.biogram--owner {
				.biogram__text {
					&:focus {
						background-color: $selected;
						border: 15px solid $selected;
						~ .line {
							height: 60%;
						}
					}
				}
			}
		}
	}
</style>