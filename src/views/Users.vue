<template>
	<div class="view">
		<div class="search__users">
			<input
				class="search__input"
				type="search"
				v-model.trim="searchedNick"
				@input="searchUsers"
				placeholder=" "
			/>
			<fa-icon class="search__icon" icon="search" />
		</div>
		<div class="users">
			<fragment v-if="users === '...'">
				...
			</fragment>
			<fragment v-else-if="!users.length">
				Brak wyników 😕
			</fragment>
			<fragment v-else>
				<div v-for="user in users" :key="user.nick" class="user">
					<router-link :to="{name: 'Profile', params: {nick: user.nick}}">
						<div class="user__avatar" v-bg:cover.center="'https://szulcus.pl/avatar.jpg'" :title="user.nick" />
					</router-link>
					<div class="user__nick">{{user.nick}}</div>
					<div class="user__button">
						<fa-icon v-if="user.notifications.map(n => n.from).includes(owner._id)" icon="user-minus" @click="() => removeFriendRequest(user._id)" />
						<fa-icon v-else-if="user.friends.map(f => n._id).includes(owner._id)" icon="user-friends" />
						<fa-icon v-else-if="user._id === owner._id" icon="crown" />
						<fa-icon v-else icon="user-plus" @click="() => sendFriendRequest(user._id)" />
					</div>
				</div>
			</fragment>
		</div>
	</div>
</template>

<script>
	import debounce from 'debounce'

	export default {
		name: "Users",
		data() {
			return {
				owner: {},
				users: '...',
				searchedNick: '',
				searchFocused: false
			}
		},
		async mounted() {
			try {
				const response = await this.$axios.get('/users')
				console.log(response)
				this.users = response.data.users
				this.owner = response.data.owner
			}
			catch(err) {
				console.log(err.response)
			}
		},
		methods: {
			searchUsers: debounce(async function(e) {
				const nick = e.target.value.trim()
				const response = await this.$axios.get(`/users/search?nick=${nick}`)
				this.users = response.data.users
				
				// window.find(nick)
				// e.target.focus()
			}, 300),
			async sendFriendRequest(uid) {
				try {
					const response = await this.$axios.post(`/users/${uid}/send-friend-request`)
					console.log(response.data)
					// console.log(object)
					const index = this.users.findIndex(u => u._id === uid)
					this.users[index].notifications.push(response.data.notification._id)
				}
				catch(err) {
					console.log(err.response)
				}
			},
			async removeFriendRequest(uid) {
				console.log(uid)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search__users {
		position: relative;
		width: 100%;
		max-width: 800px;
		background-color: $dark;
		margin: 0 auto;
		border-radius: 30px;
		overflow: hidden;
		.search__input {
			font-size: 20px;
			width: 100%;
			margin: 0;
			padding: 15px 30px;
			color: $primary;
			transition: all 0.2s ease;
			&:not(:placeholder-shown),
			&:focus {
				+ .search__icon {
					left: calc(100% - 50px);
					opacity: 1;
				}
				background-color: $selected;
			}
		}
		.search__icon {
			position: absolute;
			top: 50%;
			left: 30px;
			display: block;
			content: '\f002';
			font-family: "Font Awesome 5 Free";
			font-weight: bold;
			transform: translateY(-50%);
			transition: all 0.5s ease;
			opacity: 0.5;
			pointer-events: none;
		}
	}
	.users {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
		@include scroll;
		.user {
			width: 100%;
			max-width: 600px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 10px;
			padding: 20px 50px;
			border-radius: 20px;
			background-color: $dark;
			transition: all 0.1s ease;
			@include hover {
				background-color: $selected;
			}
			@media (min-width: 500px) {
				grid-template-columns: 30% 70%;
			}
			.user__avatar {
				width: 70px;
				height: 70px;
				margin-left: 20px;
				border-radius: 50%;
				box-shadow: 0 0 30px rgb($strong, 0.3);
			}
			.user__nick {
				display: block;
				font-size: 22px;
				font-weight: bold;
				&::first-letter {
					color: $decorative;
				}
			}
			.user__button {
				font-size: 18px;
			}
		}
	}
</style>