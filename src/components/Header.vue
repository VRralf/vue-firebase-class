<script setup>
import { ref, onMounted } from 'vue'
import { user } from '../firebase/auth.js'

</script>

<template>
    <header>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
          </nav>
          <!-- UserPhoto -->
          <div class="userPhoto">
            <img :src="user? user.photoURL : 'https://picsum.photos/200'" alt="user photo" />
          </div>
        </div>
    </header>
</template>


<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.userPhoto {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.userPhoto img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>