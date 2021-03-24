<template>
	<div class="login-view">
		<LoginForm
			type="login"
			:error="error"
			@submited="login"
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
			async login(nick, password) {
				try {
					const response = await this.$axios.post('/auth/login', {
						nick, password
					})
					if (response.data.success) {
						this.$ls.set('token', response.data.token)
						this.$ls.set('id', response.data.user._id)
						this.$ls.set('nick', response.data.user.info.nick)
						this.$ls.set('lang', response.data.user.info.lang)
						this.$axios.defaults.headers.common['auth-token'] = response.data.token
						this.$router.push({name: 'Profile', params: {nick: response.data.user.info.nick}})
					}
					console.log(response)
				}
				catch(err) {
					console.log(err.response.data)
					this.error = err.response.data
				}
			},
			async enterWithFb() {
				try {
					console.log('fb')
				}
				catch(err) {
					console.log(err)
				}
			},
			async enterWithGoogle() {
				try {
					console.log('google')
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