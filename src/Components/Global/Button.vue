<template>
	<button :disabled="disabled" :type="type" :class="['button-component', {'button-component--small': small}]" @click="$emit('click', $event)">
		{{content}}
	</button>
</template>

<script>
	export default {
		name: "Button",
		props: {
			content: String,
			type: String,
			disabled: Boolean,
			small: Boolean
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button-component {
		display: block;
		position: relative;
		font-size: 18px;
		padding: 7px 10px;
		margin: 10px;
		background-color: transparent;
		border-radius: 15px;
		border: 3px solid $decorative;
		color: $primary;
		letter-spacing: 1px;
		transition: background-color 0.5s ease, transform 0.2s ease;
		overflow: hidden;
		outline: none;
		font-weight: bold;
		&::before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: $decorative;
			opacity: 0.5;
			filter: blur(5px);
			transform: translateX(-130%) skewX(-15deg);
			transition: all 0.7s ease;
			z-index: 2;
		}
		@include hover {
			background-color: $decorative;
			color: $bg;
			&::before {
				transform: translateX(130%) skewX(-15deg);
				opacity: 0.6;
				transition: all 0.7s ease;
			}
			&:active{
				transform: scale(0.97);
			}
		}
	}
	.button-component--small {
		font-size: 16px;
		border-radius: 10px;
		margin: 5px 0;
		padding: 5px 7px;
		letter-spacing: 0.5px;
	}
</style>