<template>
  <section class="">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            CloudHIS Login
          </h1>

          <div class="space-y-4 md:space-y-6">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                User ID
              </label>
              <input type="username" name="username" id="username" v-on:keyup.enter="login"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="User ID" required="" v-model="username">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input type="password" name="password" id="password" placeholder="••••••••" v-on:keyup.enter="login"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" v-model="password">
            </div>
            <button
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="login">
              Login
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              <a href="#">
                Find Password
              </a>
            </p>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              If you don't have an account, please
              <router-link to="/auth/signup" class="font-medium hover:underline text-gray-900 dark:text-white">
                click here
              </router-link>
            </p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'


export default {
  name: 'LoginPage',

  data() {
    return {
      username: '',
      password: '',
    };
  },

  methods: {
    login() {
      axios.post('/auth/api/user/login/',
        {
          "username": this.username,
          "password": this.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
        .then((res) => {
          if (res.status === 200) {
            // NOTE: expires 설정이 안됨 -> cookie expires를 쓰는게 아니라, 요청을 보내기 전에 exp값
            // 을 확인해서 refresh 하도록 하자
            this.$store.commit('login', res.data);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 400) {
            alert(JSON.stringify(err.response.data));
          } else {
            alert('알수없는 에러입니다');
          }
        });
    },
  },
};

</script>

<style>

</style>
