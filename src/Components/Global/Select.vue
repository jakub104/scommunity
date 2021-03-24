<template>
	<div class="select-wrapper">
		<div :class="['select', {'select--active': active, 'select--disabled': disabled}]" @click="changeActive">
			{{options[activeIndex]}}
		</div>
		<div class="options-container">
			<div
				:class="['option', {selected: option === checked}]"
				v-for="(option, index) in options" :key="`option${index}`"
				@click="(e) => setIndex(index)"
			>
				<input
					type="radio"
					class="radio"
					:id="option"
				/>
				<label class="label" :for="option">
					{{option}}
				</label>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Select",
		props: {
			options: Array,
			disabled: Boolean,
			checked: String
		},
		data() {
			return {
				active: false,
				activeIndex: this.options.indexOf(this.checked)
			}
		},
		methods: {
			setIndex(index) {
				this.activeIndex = index
				this.active = false
				this.$emit('option-selected', this.options[this.activeIndex])
			},
			changeActive() {
				if (!this.disabled) {
					this.active = !this.active
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.select-wrapper {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 50%;
		.select {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			background-color: #404040;
			border-radius: 10px;
			padding: 5px 30px 5px 5px;
			font-size: 16px;
			cursor: pointer;
			&::after {
				position: absolute;
				top: 50%;
				right: 10px;
				content: '\f107';
				font-family: "Font Awesome 5 Free";
				font-size: 16px;
				font-weight: bold;
				transform: translateY(-50%);
				transition: transform 0.4s ease;
			}
		}
		.select--disabled {
			cursor: default;
			&::after {
				content: '';
			}
		}
		.select--active {
			&::after {
				transform: translateY(-50%) rotate(180deg);
			}
			& ~ .options-container {
				max-height: 100px;
				opacity: 1;
				overflow-y: scroll;
				&::-webkit-scrollbar{
					width: 0px;
				}
			}
		}
		.options-container {
			width: 100%;
			max-height: 0px;
			margin-top: 5px;
			opacity: 0;
			background: #404040;
			transition: all 0.4s ease;
			border-radius: 10px;
			overflow: hidden;
			z-index: 99;
			.option {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 5px 10px;
				transition: all 0.2s ease;
				cursor: pointer;
				&:hover {
					background-color: $lang-selected;
				}
				.label {
					cursor: pointer;
				}
				.radio {
					display: none;
				}
			}
			.selected {
				background-color: $lang-selected;
			}
		}
		.flag {
			width: 20px;
			height: 20px;
		}
	}
</style>