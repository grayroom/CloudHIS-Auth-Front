import Vue from 'vue';
import App from './App.vue';
import './tailwind.css';

import router from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app');
