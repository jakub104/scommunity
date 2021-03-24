<template>
	<div :class="['info-wrapper', {'info__wrapper--edited': JSON.stringify(info.interests) !== JSON.stringify(updatedInterests)}]">
		<div class="info">
			<div class="info__interests">
				<div class="interests__title">{{$t('profile.info.interests.name')}}:</div>
				<div class="interests">
					<fragment v-if="updatedInterests.length > 0">
						<div class="interest" v-for="interest in updatedInterests" :key="interest">
							<div class="interest__remove" v-if="isOwner" @click="removeInterest(interest)">
								<fa-icon icon="times" />
							</div>
							{{$t(`profile.info.interests.variants.${interest}`)}}
						</div>
					</fragment>
					<div v-else class="interest">
						-
					</div>
				</div>
				<fragment v-if="isOwner">
					<Choice
						checked="Programowanie 💻"
						@add-item="addInterest"
						:options="Object.entries($t('profile.info.interests.variants'))"
					/>
				</fragment>
			</div>
		</div>
		<div class="info">
			<div class="info__type">{{$t('profile.info.gender.name')}}:</div>
			<input disabled class="info__input" type="text" :value="$t(`profile.info.gender.variants.${info.gender}`)" />
		</div>
		<div class="info">
			<div class="info__type">{{$t('profile.info.lang.name')}}:</div>
			<input disabled class="info__input" type="text" :value="$t(`profile.info.lang.variants.${info.lang}`)" />
		</div>
		<div class="info">
			<div class="info__type">{{$t('profile.info.role.name')}}:</div>
			<input disabled class="info__input" type="text" :value="$t(`profile.info.role.variants.${info.role}`)" />
		</div>
		<div class="info__submit" v-if="JSON.stringify(info.interests) !== JSON.stringify(updatedInterests)">
			<Button content="Zapisz zmiany" small @click="$emit('update-info', 'interests', updatedInterests)" />
		</div>
	</div>
</template>

<script>
	import Choice from '@/Components/Global/Choice'
	import Button from '@/Components/Global/Button'
	export default {
		name: "Info",
		components: {
			Choice,
			Button
		},
		props: {
			info: Object,
			isOwner: Boolean
		},
		data() {
			return {
				updatedInterests: JSON.parse(JSON.stringify(this.info.interests)),
				interest: ''
			}
		},
		methods: {
			addInterest(interest) {
				if (!this.updatedInterests.includes(interest)) {
					console.log('add', interest)
					this.updatedInterests.push(interest)
				}
				else {
					alert('Zainteresowania nie mogą sie powtarzać!')
				}
			},
			removeInterest(interest) {
				this.updatedInterests = this.updatedInterests.filter(item => item !== interest )
			}
		}
	}
</script>

<style lang="scss" scoped>
	.info-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 300px;
		@include scroll;
		.info {
			width: 100%;
			display: flex;
			align-items: center;
			background-color: $bg;
			padding: 15px;
			border-radius: 10px;
			margin: 5px 0;
			.info__type {
				width: 50%;
			}
			.info__input {
				width: 50%;
				background-color: $selected;
				color: $primary;
				padding: 5px 10px;
				border-radius: 10px;
				font-size: 16px;
			}
			.info__interests {
				width: 100%;
				text-align: center;
				.interests__title {
					margin-bottom: 10px;
				}
				.interests {
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					.interest {
						position: relative;
						background-color: $selected;
						padding: 5px 10px;
						border-radius: 10px;
						margin: 2px;
						.interest__remove {
							position: absolute;
							top: -3px;
							right: -3px;
							width: 20px;
							height: 20px;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: $selected;
							border: 3px solid $bg;
							border-radius: 50%;
							font-size: 10px;
							color: $primary;
							transition: 0.1s ease;
							@include hover {
								transform: scale(1.1);
							}
						}
					}
				}
				.info__interest--add {
					.interest__input {
						padding: 0 0 0 20px;
					}
					.input__icon {
						position: absolute;
						top: 50%;
						left: 10px;
						transform: translateY(-50%);
						font-size: 14px;
						transition: 0.2s ease;
						@include hover {
							opacity: 0.7;
						}
					}
				}
			}
		}
		.info__submit {
			display: flex;
			justify-content: center;
			width: 100%;
			position: absolute;
			bottom: 0;
			background-color: $dark;
			border-radius: 20px;
			padding: 5px 0;
			animation: opacity 0.2s ease;
		}
	}
	.info__wrapper--edited {
		padding-bottom: 30px;
	}
</style>