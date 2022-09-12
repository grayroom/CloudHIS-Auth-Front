import VueRouter from 'vue-router';

const route = [
  // path별 component를 추가한다.
  { path: '/auth/home', component: () => import('@/components/MainPage') },
  { path: '/auth', redirect: '/home' },

  { path: '/auth/login', component: () => import('@/components/LoginPage') },
  { path: '/auth/signup', component: () => import('@/components/SignupPage') },
];

const router = new VueRouter({
  mode: 'history',
  routes: route,
});

export default router;
