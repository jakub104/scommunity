<template>
	<div class="search-wrapper">
		<h1 class="search__title">Wyszukiwarka</h1>
		<div class="search__types">
			<div class="types__nav">
				<div class="nav__item">
					<fa-icon icon="user-friends" />
				</div>
				<div class="nav__item">
					<fa-icon icon="users" />
				</div>
				<div class="nav__item">
					<fa-icon icon="file-alt" />
				</div>
			</div>
			<div class="type">
				<div class="type__search">
					<div class="search__submit">
						<fa-icon class="submit__icon" icon="search" />
					</div>
					<input class="search__input" type="search" placeholder="Szukaj wśród użytkowników..." />
				</div>
				<div class="items">
					<div class="item" v-for="user in users" :key="user._id">
						<router-link :to="{name: 'Profile', params: {nick: user.info.nick}}">
							<img class="item__img" :src="user.info.avatar" alt="">
						</router-link>
						<h3 class="item__title">{{user.info.nick}}</h3>
						<div class="item__info">
							{{user.friends.length}}
							<fa-icon icon="user-friends" />
						</div>
						<div class="item__info">
							<fa-icon class="info__icon" icon="user-plus" />
						</div>
					</div>
				</div>
			</div>
			<div class="type">
				<div class="type__search">
					<div class="search__submit">
						<fa-icon icon="search" />
					</div>
					<input class="search__input" type="search" placeholder="Szukaj wśród grup..." />
				</div>
				<div class="items">
					<div class="item" v-for="group in groups" :key="group._id">
						<router-link :to="{name: 'Chat', params: {id: group._id}}">
							<img class="item__img" :src="group.img" alt="">
						</router-link>
						<h3 class="item__title">{{group.name}}</h3>
						<div class="item__info">
							{{group.owners.length}}
							<fa-icon icon="user" />
						</div>
						<div class="item__info">
							<fa-icon class="info__icon" icon="door-open" />
						</div>
					</div>
				</div>
			</div>
			<div class="type">
				<div class="type__search">
					<div class="search__submit">
						<fa-icon class="submit__icon" icon="search" />
					</div>
					<input class="search__input" type="search" placeholder="Szukaj wśród wpisów..." />
				</div>
				<div class="items">
					<fragment v-if="posts.length > 0">
						<div class="item" v-for="post in posts" :key="post._id">
							<img class="item__img" :src="post.owner.info.avatar" alt="">
							<div class="item__info">
								<h3 class="info__title">{{post.owner.info.nick}}</h3>
								<div class="info__description">{{post.content}}</div>
							</div>
						</div>
					</fragment>
					<div v-else class="items__empty">...</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Search",
		data() {
			return {
				users: [],
				groups: [],
				posts: [],
			}
		},
		async mounted() {
			try {
				const usersRes = await this.$axios.get('/users')
				if (usersRes.data.success) {
					console.log(usersRes.data)
					this.users = usersRes.data.users
				}
				const groupsRes = await this.$axios.get('/chats/groups')
				if (groupsRes.data.success) {
					console.log(groupsRes.data)
					this.groups = groupsRes.data.chats
				}
			}
			catch(err) {
				console.log(err.response)
			}
		},
		methods: {
			async searchUsers(nick) {
				const usersRes = await this.$axios.get(`/users?nick=${nick}`)
				if (usersRes.data.success) {
					console.log(usersRes.data)
					this.users = usersRes.data.users
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.search__title {
			text-align: center;
			margin: 10px 0 50px 0;
			font-size: 25px;
			@include line;
		}
		.search__types {
			position: relative;
			width: 100%;
			max-width: 1500px;
			display: flex;
			flex: 1;
			.types__nav {
				position: absolute;
				top: 0;
				left: 0;
				transform: translateY(-50%);
				width: 100%;
				justify-content: space-around;
				display: flex;
				.nav__item {
					width: 50px;
					height: 50px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: $dark;
					color: $decorative;
					border-radius: 50%;
					font-size: 18px;
					border: 4px solid $bg;
				}
			}
			.type {
				width: calc(100% / 3 - 20px);
				background-color: $dark;
				margin: 0 10px;
				border-radius: 20px;
				padding: 30px 20px 20px 20px;
				.type__search {
					position: relative;
					width: 100%;
					margin-bottom: 20px;
					.search__submit {
						position: absolute;
						top: 0;
						left: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						border: 4px solid $dark;
						width: 40px;
						height: 40px;
						border-radius: 15px;
						.submit__icon {
							color: $primary;
							transition: 0.2s ease;
						}
						@include hover {
							.submit__icon {
								color: $decorative;
							}
						}
					}
					.search__input {
						width: 100%;
						height: 40px;
						background-color: $selected;
						padding: 5px 10px 5px 45px;
						border-radius: 15px;
						font-size: 18px;
						border: 4px solid $dark;
						color: $primary;
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
				.items {
					width: 100%;
					.items__empty {
						text-align: center;
					}
					.item {
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						background-color: $bg;
						padding: 10px;
						border-radius: 10px;
						margin: 10px 0;
						.item__img {
							width: 50px;
							height: 50px;
							border-radius: 40%;
							margin: 0 10px;
							transition: 0.3s ease;
							@include hover {
								opacity: 0.7;
							}
						}
						.item__title {
							flex: 1;
							text-align: center;
							margin: 0;
							&::first-letter {
								color: $decorative;
							}
							@include ellipsis;
						}
						.item__info {
							font-size: 16px;
							font-weight: bold;
							margin: 0 10px;
							.info__icon {
								color: $decorative;
								transition: 0.2s ease;
								@include hover {
									opacity: 0.7;
								}
							}
						}
					}
				}
			}
		}
	}
</style>