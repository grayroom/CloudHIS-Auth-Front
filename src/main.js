import Vue from 'vue';
import App from './App.vue';
import './tailwind.css';
import store from '@/store/store';

import router from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
}).$mount('#app');
