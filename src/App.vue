<template>
  <div class="bg-white dark:bg-gray-800 h-screen">
    <app-nav></app-nav>
    <router-view class='p-5'></router-view>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'


export default {
  components: { AppNav },
  name: 'App',
}
</script>

<style>
</style>
