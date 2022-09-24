<template>
  <section class="">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            CloudHIS 로그인
          </h1>

          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                사용자 ID
              </label>
              <input type="username" name="username" id="username"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="사용자 ID" required="" v-model="username">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                비밀번호
              </label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required="" v-model="password">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required="">
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300">
                    로그인 유지
                  </label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                비밀번호 찾기
              </a>
            </div>
            <button
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              @click="login">
              로그인
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              아직 계정이 없으시다면
              <router-link to="/auth/home/signup"
                           class="font-medium text-primary-600 hover:underline dark:text-primary-500">
                여기를 클릭
              </router-link>
            </p>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import eventHub from './eventHub'
import Cookies from 'js-cookie'


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
            Cookies.set('access', res.data.access);
            Cookies.set('refresh', res.data.refresh);
            
            eventHub.$emit('login');
            
            alert('로그인 성공');
            this.$router.push('/auth/home');
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
