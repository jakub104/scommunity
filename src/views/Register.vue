<template>
	<div class="login-view">
		<LoginForm
			type="register"
			:error="error"
			@submited="signUp"
			@enter-with-fb="enterWithFb"
			@enter-with-google="enterWithGoogle"
		/>
	</div>
</template>

<script>
	import LoginForm from '@/Components/Forms/LoginForm.vue'
	export default {
		name: "Login",
		components: {
			LoginForm
		},
		data() {
			return {
				error: {}
			}
		},
		methods: {
			async signUp(nick, password, gender) {
				try {
					const response = await this.$axios.post('/auth/register', {
						nick, password, gender,
						lang: this.$i18n.locale
					})
					if (response.data.success) {
						console.log('data1', response)
						console.log('data2')
						console.log('data2', response)
						this.$ls.set('token', response.data.token)
						this.$ls.set('id', response.data.user._id)
						this.$ls.set('nick', response.data.user.info.nick)
						this.$ls.set('lang', response.data.user.info.lang)
						this.$axios.defaults.headers.common['auth-token'] = response.data.token
						this.$router.push({name: 'Profile', params: {nick: response.data.user.info.nick}})
					}
				}
				catch(err) {
					console.log(err.response)
					this.error = err.response.data
				}
			},
			async enterWithFb() {
				try {
					console.log('fb')
					alert('Ta opcja jest jeszcze niedostępna!')
				}
				catch(err) {
					console.log(err)
				}
			},
			async enterWithGoogle() {
				try {
					console.log('google')
					alert('Ta opcja jest jeszcze niedostępna!')
				}
				catch(err) {
					console.log(err)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login-view {
		width: 100%;
		height: 100%;
	}
</style>