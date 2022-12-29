import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router.js';
import creatPersistedState from 'vuex-persistedstate';

import axios from 'axios';
import Cookies from 'js-cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [creatPersistedState()],
  state: {
    name: '',
    email: '',
    authority: '',
    is_login: false,
  },
  mutations: {
    login: function (state, data) {
      Cookies.set('access', data.access);
      Cookies.set('refresh', data.refresh);
      const accessTokenJSON = JSON.parse(atob(data.access.split('.')[1]));

      state.name = accessTokenJSON.name;
      state.email = accessTokenJSON.email;
      state.authority = accessTokenJSON.authority;
      state.is_login = true;

      alert('로그인 성공');
      router.push('/').then((r) => r);
    },
    adminCheck: function (state) {
      if (state.authority !== '2') {
        alert('관리자만 접근 가능합니다.');
        router.push('/').then((r) => r);
      }
    },
    tokenCheck: function (state) {
      const accessToken = Cookies.get('access');
      const refreshToken = Cookies.get('refresh');

      if (
        accessToken == undefined ||
        refreshToken == undefined ||
        state.authority < 0
      ) {
        alert('로그인이 필요합니다.');
        router.push('/auth/login').then((r) => r);
      } else {
        const accessTokenJSON = JSON.parse(atob(accessToken.split('.')[1]));
        if (new Date(accessTokenJSON.exp * 1000) < new Date()) {
          axios
            .post(
              '/auth/api/token/refresh/',
              {
                refresh: refreshToken,
              },
              {
                withCredentials: true,
                crossDomain: true,
                credentials: 'access',
                headers: {
                  Authorization: 'Bearer ' + accessToken,
                  ContentType: 'application/json',
                },
              }
            )
            .then((response) => {
              Cookies.remove('access');
              Cookies.remove('refresh');
              Cookies.set('access', response.data.access);
              Cookies.set('access', response.data.refresh);
            })
            .catch(() => {
              state.name = '';
              state.email = '';
              state.authority = '';
              state.is_login = false;
              Cookies.remove('access');
              Cookies.remove('refresh');

              alert('로그아웃 되었습니다.');
              router.push('/auth/login').then((r) => r);
            });
        }
      }
    },
    logout: function (state) {
      state.name = '';
      state.email = '';
      state.authority = '';
      state.is_login = false;
      Cookies.remove('access');
      Cookies.remove('refresh');

      alert('로그아웃 성공');
      router.push('/').then((r) => r);
    },
  },
  getters: {
    getName: function (state) {
      return state.name;
    },
    getEmail: function (state) {
      return state.email;
    },
    getAuthority: function (state) {
      return state.authority;
    },
  },
  actions: {},
});

export default store;
