<script setup>

import user from '../store/User.js';
import { addComment } from '../firebase/comments.js';
import { ref } from 'vue';

const texto = ref('');

const props = defineProps({
    postId: '',
    typeOf: String
})

const addNewComment = () => {
    let newComment = {
        id: crypto.randomUUID(),
        postId: props.postId,
        date: Date.now(),
        name: user.value.displayName,
        email: user.value.email,
        text: texto.value,
        photo: user.value.photoURL,
    }
    addComment(newComment)
    texto.value = ''
}


</script>

<template>
    <form @submit.prevent="addNewComment">
        <input required v-model="texto" type="text" :placeholder="'comentar como '+user.displayName.split(' ')[0]">
        <button>Enviar</button>
    </form>
</template>

<style scoped>
    form{
        display: flex;
        width: 100%;
        height: 2rem;
    }

    form input{
        flex-grow: 1;
        border-radius: 10px 0 0 10px;
        border-right: 1px solid black;
    }

    form button{
        border-radius: 0 10px 10px 0;
        border-left: 1px solid black;
    }

</style>