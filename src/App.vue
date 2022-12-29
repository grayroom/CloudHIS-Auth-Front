<template>
  <div class="bg-white dark:bg-gray-800 h-screen overflow-y-scroll">
    <app-nav class="z-40 absolute w-full border-b border-gray-500"></app-nav>
    <router-view class='p-content'></router-view>
  </div>
</template>

    
<script>
import AppNav from './components/AppNav.vue'

export default {
  components: { AppNav },
  name: 'App',
}
</script> 

<style lang="scss">
.p-content {
  margin-top: 4.5rem;
  padding: 1.25rem
}
</style>