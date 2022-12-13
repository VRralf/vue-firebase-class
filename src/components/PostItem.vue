<script setup>

import CommentContainer from './CommentContainer.vue';
import NewComment from './NewComment.vue';
import user from '../store/User.js';


const props = defineProps({
    post: {},
    typeof: Object
})

/* const comments = ref([
    {
        id: 1,
        postId: 1,
        photo: null,
        name: 'Ivan',
        body:'Comentario random 1',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 1,
        photo: null,
        name: 'Ivan',
        body:'Comentario random 2',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 1,
        photo: null,
        name: 'Ivan',
        body:'Comentario random 3',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 2,
        photo: null,
        name: 'Eduardo',
        body:'Comentario random 4',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 2,
        photo: null,
        name: 'Eduardo',
        body:'Comentario random 5',
        date: Date.now(),
    },
]) */

</script>

<template>
    <div class="card">
        <div class="cardHeader">
            <img :src="post.photo? post.photo : 'https://picsum.photos/200'" alt="">
            <h3>{{ post.name }}</h3>
        </div>
        <div class="cardContent">
            <h4>{{ post.title }}</h4>
            <p>{{ post.body }}</p>
        </div>
        <NewComment v-if="user" :postId="post.id" />
        <CommentContainer :postId="post.id" />
<!--         <h1>POST</h1> -->
        <!-- <button @click="deleteComment(post.id)">Delete</button> -->
    </div>
</template>

<style scoped>
button {
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #ccc;
    cursor: pointer;
}

.card {
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 15rem;
    min-height: 5rem;
    min-width: 290px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.cardHeader{
    display: flex;
    height: 3rem;
    align-items: center;
    gap: 1rem;
}

.cardHeader img{
    height: 100%;
    border-radius: 50%;
}

.cardContent {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
}

.cardContent h4{
    font-weight: bolder;
    text-transform: capitalize;
    text-align: end;
    font-size: 1.5rem;
}

.card button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0.5rem;
    background-color: red;
    color: white;
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
}

.muted {
    color: red;
    font-size: 0.7rem;
}
</style>