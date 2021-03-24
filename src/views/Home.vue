<template>
	<div class="home-view">
		<Languages v-if="true" />
		<div class="logo">
			<img class="logo__element" alt="Vue logo" src="@/Assets/logo.svg">
			<img class="logo__element" alt="Vue logo" src="@/Assets/logotype.svg">
		</div>
		<div class="buttons">
			<Button type="text" :content="$t('forms.login.submit')" @click="$router.push({name: 'Login'})" />
			<Button type="text" :content="$t('forms.register.submit')" @click="$router.push({name: 'Register'})" />
		</div>
	</div>
</template>

<script>
import Button from '@/Components/Global/Button'
import Languages from '@/Components/Global/Languages'

export default {
	name: 'Home',
	components: {
		Button,
		Languages
	},
	async created() {
		const id = this.$ls.get('id')
		const nick = this.$ls.get('nick')
		const token = this.$ls.get('token')
		const lang = this.$ls.get('lang')
		if (id && nick && token && lang) {
			this.$i18n.locale = lang
			// this.$router.push({
			// 	params: {lang}
			// })
			this.$router.push({
				name: 'Profile',
				params: {nick, lang}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
	.home-view {
		width: 90%;
		height: 90%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin: auto 0;
		.logo {
			max-width: 100%;
			display: flex;
			flex-direction: column;
			margin: 50px 0;
			.logo__element:nth-child(1) {
				margin: 0 auto;
				max-width: 40%;
			}
		}
		.buttons {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
	}
</style>
