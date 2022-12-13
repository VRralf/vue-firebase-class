<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import user from './store/User.js';

onMounted(()=>{
  let localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    user.value = {
      ...localUser
    }
  }
})


</script>

<template>
  <div class="body">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped>
.body {
  background-color: #ffffff;
  background-image: radial-gradient(#e145f7 1px, transparent 1px), radial-gradient(#e145f7 1px, #ffffff 1px);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
  min-height: 100vh;
}
</style>
