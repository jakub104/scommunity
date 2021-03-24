<template>
	<div class="choice-wrapper">
		<div class="choice" :hint="hint[1]">
			<div class="choice__add" @click="addItem">
				<fa-icon class="add__icon" icon="plus" />
			</div>
			<input class="choice__input" type="text" @input="setHint" v-model="word" @keypress.enter="addItem" :placeholder="$t('profile.info.interests.add')" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "Choice",
		props: {
			options: Array,
		},
		data() {
			return {
				hint: ['', ''],
				word: ''
			}
		},
		methods: {
			setHint(e) {
				// this.word = e.target.value[0].toUpperCase() + e.target.value.slice(1)
				if (e.target.value) {
					const hints = this.options.filter(option => option[1].startsWith(e.target.value))
					if (hints.length > 0) {
						this.hint = hints[0]
					}
					else {
						this.hint = ['', '']
					}
				}
				else {
					this.hint = ['', '']
				}
			},
			addItem() {
				if (this.hint[0]) {
					this.$emit('add-item', this.hint[0])
					this.hint = ['', '']
					this.word = ''
				}
				else {
					alert(`Musisz wybrać jedno z poniższych zainteresowań:\n${this.options.map(option => option[1]).join(', ')}.`)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.choice-wrapper {
		width: 100%;
		margin-top: 10px;
		.choice {
			position: relative;
			width: 100%;
			height: 36px;
			&::before {
				content: attr(hint);
				position: absolute;
				top: 0;
				left: 0;
				padding: 5px 10px 5px 40px;
				border: 3px solid $bg;
				line-height: 20px;
				color: rgb($primary, 0.5);
				@include ellipsis;
			}
			.choice__add {
				position: absolute;
				top: 0px;
				left: 0px;
				height: 36px;
				width: 36px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 10px;
				border: 3px solid $bg;
				background-color: $selected;
				z-index: 2;
				.add__icon {
					color: $primary;
					transition: 0.2s ease;
				}
				@include hover {
					/* background-color: $secondary; */
					.add__icon {
						color: $decorative;
					}
				}
			}
			.choice__input {
				position: absolute;
				top: 0px;
				left: 0px;
				display: block;
				width: 100%;
				background-color: rgb($secondary, 0.3);
				/* border: none; */
				border: 3px solid $bg;
				border-radius: 10px;
				font-size: 16px;
				padding: 5px 10px 5px 40px;
				color: $primary;
				line-height: 20px;
				&::placeholder {
					color: $secondary;
					transition: 0.3s ease;
				}
				&:focus {
					&::placeholder {
						opacity: 0;
						letter-spacing: 1px;
					}
				}
			}
		}
	}
</style>