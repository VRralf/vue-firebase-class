<script setup>

import { ref, computed } from 'vue';
import { addPost } from '../firebase/posts.js';
import user from '../store/User.js';

const name = ref('')
const email = ref('')
const message = ref('')

const updateData = computed(() => {
  if(user.value){
    console.log(user);
    name.value = user.value.displayName
    email.value = user.value.email
  }
})

const addNewPost = () => {
    // logica para que los datos ingresados esten bien etc etc etc...
    let newPost = {
        id: crypto.randomUUID(),
        date: Date.now(),
        name: name.value,
        email: email.value,
        body: message.value,
        photo: user.value.photoURL,
    }
    addPost(newPost)
    message.value = ''
}

</script>

<template>
    {{updateData}}
    <form>
        <input readonly v-model="name" type="text" placeholder="Name" />
        <input readonly v-model="email" type="email" placeholder="Email" />
        <textarea v-model="message" placeholder="Comment" @keyup.enter="addNewPost"></textarea>
        <button @click.prevent="addNewPost">Submit</button>
    </form>
</template>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  max-width: 290px;
  margin: 0 auto;
  gap: 0.5rem;
}

input, textarea{
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea{
  resize: none;
}

button{
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}
</style>