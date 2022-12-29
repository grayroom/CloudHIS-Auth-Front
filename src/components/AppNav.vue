<template>
	<nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900">
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<router-link to="/auth/home" class="p-3 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
				CloudHIS / AUTH
			</router-link>
			<div class="flex items-center md:order-2 gap-2">
				<button type="button" @click="toggleMainMenu"
					class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
					<span class="sr-only">Open main menu</span>
					<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"></path>
					</svg>
					<svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"></path>
					</svg>
				</button>
				<button type="button"
					class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
					id="user-menu-button" @click="toggleUserMenu">
					<span class="sr-only">Open user menu</span>
					<!-- <img class="w-8 h-8 rounded-full" src="" alt="user photo"> -->
					<svg class="w-8 h-8 p-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
						</path>
					</svg>
				</button>
				<!-- Dropdown menu -->
				<div
					class="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 hidden cursor-pointer select-none border border-gray-500"
					id="user-dropdown" ref="userMenu" aria-hidden="true">
					<div class="py-3 px-4">
						<span class="block text-sm text-gray-900 dark:text-white" ref="name"></span>
						<span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400" ref="useremail"></span>
					</div>
					<ul v-if="is_login" class="py-1" aria-labelledby="user-menu-button">
						<li @click="toggleUserMenu">
							<router-link to="/auth/info"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
								정보수정
							</router-link>
						</li>
						<li>
							<a class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
								@click="logout">
								로그아웃
							</a>
						</li>
					</ul>
					<ul v-else class="py-1" aria-labelledby="user-menu-button">
						<li @click="toggleUserMenu">
							<router-link to="/auth/login"
								class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
								로그인
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="justify-between items-center w-full md:flex md:w-auto md:order-1 hidden" id="mobile-menu-2"
				ref="mainMenu" aria-hidden="true">

				<ul v-if="is_login"
					class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a href="#"
							class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
							aria-current="page">메인페이지</a>
					</li>
					<li>
						<a href="/emr/"
							class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							EMR
						</a>
					</li>
					<li v-if="is_admin">
						<a href="/admin/"
							class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							관리자
						</a>
					</li>
					<li v-else>
						<a href="/plan/"
							class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
							일정
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'


export default {
	name: 'AppNav',

	methods: {
		toggleMainMenu() {
			this.$refs.mainMenu.toggleAttribute('aria-hidden')
			this.$refs.mainMenu.classList.toggle('hidden')
		},

		toggleUserMenu() {
			this.$refs.userMenu.toggleAttribute('aria-hidden')
			this.$refs.userMenu.classList.toggle('hidden')
		},

		logout() {
			const accessToken = Cookies.get('access')

			axios.post('/auth/api/user/logout/', {}, {
				withCredentials: true,
				crossDomain: true,
				credentials: "access",
				headers: {
					Authorization: "Bearer " + accessToken,
					ContentType: "application/json"
				}
			})
				.then(() => {
					Cookies.remove('access')
					Cookies.remove('refresh')
					this.toggleUserMenu()
					this.$store.commit('logout')
					this.$router.go('/auth/home');
				})
				.catch((error) => {
					console.log(error)
				})
		},

		getUserinfo(accessToken) {
			axios.get('/auth/api/user/info/',
				{
					withCredentials: true,
					crossDomain: true,
					credentials: "access",
					headers: {
						Authorization: "Bearer " + accessToken,
					}
				})
				.then((response) => {
					console.log(response.data)
					this.$refs.name.innerHTML = response.data.name
					this.$refs.useremail.innerHTML = response.data.email
				})
				.catch(() => {
					Cookies.remove('access')
					Cookies.remove('refresh')
					this.$refs.name.innerHTML = "로그인이 필요합니다."
					this.$refs.useremail.innerHTML = ""
					this.is_login = false
				})
		}
	},

	data() {
		return {
			is_login: false,
			is_admin: false,
		}
	},

	watch: {
		// TODO: 토큰이 있다면, 토큰이 만료되었는지 여부를 확인하고,,, refresh token까지 만료된 경우에는
		// 로그아웃을 시키고,,, access token만 만료된 경우에는 refresh token으로 access token을 재발급 받아야함
		$route(to, from) {
			if (to.path !== from.path) {
				this.is_login = this.$store.getters.getName != ""
				this.$refs.name.innerHTML = this.$store.getters.getName == "" ? "로그인이 필요합니다." : this.$store.getters.getName
				this.$refs.useremail.innerHTML = this.$store.getters.getEmail == "" ? "" : this.$store.getters.getEmail
			}

			this.$forceUpdate()
		}

	},
}

</script>

<style>
#user-dropdown {
	position: absolute;
	inset: 0 auto auto 0;
	margin: 0;
	width: 170px;
	transform: translate3d(calc(100vw - 200px), 82px, 0px);
}
</style>