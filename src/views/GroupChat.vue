<template>
	<div class="chat-wrapper">
		group chat
		{{$route.params.chatId}}
	</div>
</template>

<script>
	export default {
		name: "GroupChat",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.chat-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>