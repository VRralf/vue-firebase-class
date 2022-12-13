<script setup>

import CommentContainer from './CommentContainer.vue';
import NewComment from './NewComment.vue';
import user from '../store/User.js';


const props = defineProps({
    post: {},
    typeof: Object
})

</script>

<template>
    <div class="card">
        <div class="cardHeader">
            <img :src="post.photo? post.photo : 'https://picsum.photos/200'" alt="">
            <h3>{{ post.name }}</h3>
        </div>
        <div class="cardContent">
            <p>{{ post.body }}</p>
        </div>
        <CommentContainer :postId="post.id" />
        <NewComment v-if="user" :postId="post.id" />
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
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    padding: 1rem;
    width: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.cardHeader{
    display: flex;
    width: 100%;
    height: 3rem;
    align-items: center;
    gap: 1rem;
    border-bottom: 2px solid palevioletred;
    border-radius: 50px 0 0 50px;
}

h3{
    font-weight: bold;
}

.cardHeader img{
    height: 100%;
    border-radius: 50%;
    border: 2px solid palevioletred;
}

.cardContent {
    display: flex;
    box-shadow: 2px 2px pink;
    border-radius: 10px;
    margin: 5px 0;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
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

@media screen and (max-width: 600px){
    .card{
        width: 95%;
    }
}

</style>