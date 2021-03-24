<template>
	<form class="form-wrapper" @submit.prevent="type === 'login' ? $emit('submited', nick, password) : $emit('submited', nick, password, gender)">
		<Languages />
		<header class="title">
			<h1 class="title__content">{{$t(`forms.${type}.title`)}}</h1>
		</header>
		<div class="input-divs">
			<div class="input-div">
				<input
					class="input"
					type="text"
					placeholder=" "
					pattern="^.{3,}$"
					required
					:value="nick"
					@input="nick = $event.target.value.toLowerCase().replace(' ', '_').replace(/[^a-z0-9_\.]/, '')"
				/>
				<label class="label">
					<fa-icon icon="user" class="icon" />
					{{$t(`forms.${type}.inputs.nick`)}}
				</label>
			</div>
			<div class="input-div">
				<input
					class="input"
					:type="passType"
					placeholder=" "
					pattern="^.{6,}$"
					required
					v-model="password"
					autocomplete="off"
				/>
				<label class="label">
					<fa-icon icon="lock" class="icon" />
					{{$t(`forms.${type}.inputs.password`)}}
				</label>
				<fa-icon v-if="passType === 'password'" icon="eye" class="password" @click="passType = 'text'" />
				<fa-icon v-else icon="eye-slash" class="password" @click="passType = 'password'" />
			</div>
			<div class="gender-choise" v-if="type === 'register'">
				<div class="gender">
					<Checkbox
						:checked="gender === 'male'"
						@clicked="() => {gender !== 'male' ? gender = 'male' : gender = ''}"
					/>
					<fa-icon icon="male" class="gender-icon" />
				</div>
				<div class="gender">
					<Checkbox
						:checked="gender === 'female'"
						@clicked="() => {gender !== 'female' ? gender = 'female' : gender = ''}"
					/>
					<fa-icon icon="female" class="gender-icon" />
				</div>
				<div class="gender">
					<Checkbox
						:checked="gender === 'unknown'"
						@clicked="() => {gender !== 'unknown' ? gender = 'unknown' : gender = ''}"
					/>
					<fa-icon icon="question" class="gender-icon" />
				</div>
			</div>
			<router-link v-if="type === 'login'" :to="{name: 'Login'}" class="forgotten">{{$t(`forms.${type}.forgotPassword`)}}</router-link>
			<div v-if="error" class="error">
				{{ Object.keys($t(`forms.errors`)).includes(error.code) ? $t(`forms.errors.${error.code}`) : error.message }}
				<!-- {{error.code === 'auth/email-already-in-use' ? 'Podany adres e-mail jest już używany!' : error.message}} -->
			</div>
		</div>
		<Button type="submit" :content="$t(`forms.${type}.submit`)" />
		<div class="submit-div">
			<div class="social-media">
				<img class="social-media__icon" src="@/Assets/icons/fb.png" alt="" @click="$emit('enter-with-fb')">
				<img class="social-media__icon" src="@/Assets/icons/google.png" alt="" @click="$emit('enter-with-google')">
			</div>
			<div class="registration">
				{{$t(`forms.${type}.question.content`)}}
				<router-link :to="{name: $t(`forms.${type}.question.link.to`)}" class="registration-link">{{$t(`forms.${type}.question.link.content`)}}</router-link>
			</div>
		</div>
	</form>
</template>

<script>
	import Languages from '@/Components/Global/Languages'
	import Button from '@/Components/Global/Button.vue'
	import Checkbox from '@/Components/Global/Checkbox.vue'
	export default {
		name: "LoginForm",
		components: {
			Languages,
			Button,
			Checkbox
		},
		props: {
			type: String,
			error: Object
		},
		data() {
			return {
				passType: 'password',
				email: '',
				password: '',
				nick: '',
				id: '',
				gender: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		.title {
			display: none;
			margin: 15px 0;
			@include line;
			&::first-letter {
				color: $decorative;
			}
			.title__content {
				width: 100%;
				font-size: 25px;
				letter-spacing: 1px;
				margin: 0;
				@include ellipsis;
			}
			@media (min-height: 550px) {
				display: inline-block;
				.title__content {
					font-size: 33px;
				}
			}
		}
		.input-divs {
			width: 100%;
			max-width: 400px;
			.input-name-divs {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 20px;
				.input-div {
					.input {
						&:focus,
						&:not(:placeholder-shown) {
							~ .label {
								left: -15px;
								width: 110%;
							}
						}
					}
				}
			}
			.input-div {
				position: relative;
				margin: 10px 0;
				.input {
					width: 100%;
					border-bottom: 3px solid $decorative;
					color: $primary;
					background-color: transparent;
					margin: 20px 0;
					&:focus,
					&:not(:placeholder-shown) {
						~ .label {
							top: -5px;
							left: -30px;
							transform: scale(0.8);
						}
					}
					&:valid {
						~ .label::after {
							content: "\f00c";
							font-family: 'Font Awesome 5 Free';
							font-weight: bold;
							color: $correct;
							margin-left: 5px;
						}
					}
				}
				.label {
					position: absolute;
					top: 20px;
					left: 10px;
					width: 90%;
					text-align-last: left;
					display: block;
					color: $primary;
					z-index: -1;
					transition: all 0.2s ease;
					@include ellipsis;
					.icon {
						margin-right: 3px;
					}
				}
			}
			.password {
				position: absolute;
				top: 50%;
				right: 10px;
				font-family: 'Font Awesome 5 Free';
				transform: translateY(-50%);
				transition: all 0.2s ease;
				@include hover;
			}
		}
		.gender-choise {
			display: flex;
			justify-content: center;
			margin: 20px 0;
			.gender {
				display: flex;
				align-items: center;
				margin: 0 20px;
				.gender-icon {
					font-size: 30px;
				}
			}
		}
		.forgotten {
			display: inline-block;
			color: $secondary;
			text-decoration: none;
			transition: all 0.2s ease;
			margin-bottom: 10px;
			&:hover {
				color: $primary;
			}
		}
		.error {
			color: $wrong;
		}
		.submit-div {
			display: none;
			flex-direction: column;
			align-items: center;
			@media (min-height: 550px) {
				display: flex;
			}
			.social-media {
				.social-media__icon {
					width: 25px;
					margin: 0 7px;
				}
			}
			.registration {
				color: $secondary;
				.registration-link {
					color: $decorative;
					text-decoration: none;
					font-weight: bold;
				}
			}
		}
	}
</style>