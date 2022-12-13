<script setup>
import { user } from '../firebase/auth.js'

</script>

<template>
    <header>
        <div class="wrapper">
          <RouterLink to="/">
            <h1>Posting!!!</h1>
          </RouterLink>
          <!-- <nav>
            <RouterLink to="/">Posting</RouterLink>
            <RouterLink to="/login">Login</RouterLink>
          </nav> -->
          <!-- UserPhoto -->
          <RouterLink to="/login">
            <div class="userPhoto">
              <img :src="user? user.photoURL : 'https://picsum.photos/200'" alt="user photo" />
            </div>
          </RouterLink>
        </div>
    </header>
</template>


<style scoped>

header{
  background-color: palevioletred;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

h1{
  color: white;
  cursor: pointer;
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

a{
  text-decoration: none;
}

</style>