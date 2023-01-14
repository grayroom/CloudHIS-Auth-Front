import Vue from 'vue';
import Vuex from 'vuex';
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
    user_type: '',
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
      state.user_type = accessTokenJSON.user_type;
      state.is_login = true;

      alert('login success');
      location.href = '/';
    },
    adminCheck: function (state) {
      if (state.authority !== '2') {
        alert('invalid authority');
        location.href = '/';
      }
    },
    tokenCheck: function (state) {
      const accessToken = Cookies.get('access');
      const refreshToken = Cookies.get('refresh');

      if (accessToken == undefined || refreshToken == undefined) {
        alert('please login');
        location.href = '/auth';
      } else if (state.authority < 0) {
        alert('not approved user');
        location.href = '/auth';
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

              alert('logout success');
              location.href = '/auth/login';
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

      alert('logout success');
      location.href = '/';
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
    getUserType: function (state) {
      return state.user_type;
    },
  },
  actions: {},
});

export default store;
