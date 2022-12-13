<script setup>
import { loginWithGoogle, logout } from '../firebase/auth.js'
import user from '../store/User.js'
import router from '../router/index.js'
import { computed } from 'vue'

const login = () => {
  loginWithGoogle()
}

// computed function

const changeUser = computed(() => {
  if(user){
    console.log(user.displayName);
  }
})

</script>

<template>
  <div class="login">
    {{ changeUser }}
    <h1 v-if="!user">No se ha logueado aun!</h1>
    <div class="formsContainer">

      <!-- user card from firebase -->
      <div v-if="user" class="userCard">
        <img :src="user.photoURL" alt="user photo" />
        <h2>{{ user.displayName }}</h2>
        <p>{{ user.email }}</p>
      </div>
    </div>
    <!-- Login with google button -->
    <div>
      <button v-if="!user" class="loginButton" @click="login">Login with Google</button>
      <button v-if="user" class="logoutButton" @click="logout">Logout</button>
    </div>
    <!-- Logout button -->
  </div>
</template>

<style scoped>

.login{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.formsContainer{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Google login button */
.loginButton {
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.logoutButton{
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.userCard{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
}

.userCard img{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

form{
  display: flex;
  flex-direction: column;
  max-width: 290px;
  margin: 0 auto;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

input, textarea{
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea{
  resize: none;
}

form button{
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}

</style>
