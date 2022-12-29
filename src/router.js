import VueRouter from 'vue-router';
import store from '@/store/store';

const authFilter = () => (to, from, next) => {
  store.commit('tokenCheck');

  return next();
};

const route = [
  // path별 component를 추가한다.
  { path: '/auth/home', component: () => import('@/components/MainPage') },
  { path: '/auth', redirect: '/auth/home' },
  { path: '/', redirect: '/auth/home' },

  { path: '/auth/login', component: () => import('@/components/LoginPage') },
  { path: '/auth/signup', component: () => import('@/components/SignupPage') },
  {
    path: '/auth/info',
    component: () => import('@/components/InfoPage'),
    name: 'mypage',
    beforeEnter: authFilter(),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes: route,
});

// router.beforeEach((to, from, next) => {
//   store.commit('tokenCheck');
//   return next();
// });

export default router;
