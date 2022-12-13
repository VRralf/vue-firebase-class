<script setup>
import { ref, computed } from 'vue'
import user from '../store/User.js'
import PostItem from '../components/PostItem.vue';
import { posts } from '../store/PostStore.js'

const myPosts = ref([])

const updateMyPosts = computed(()=>{
    if(user.value){
        myPosts.value = posts.value.filter(element => element.email === user.value.email) 
    }
})




</script>

<template>
    <main>
        {{updateMyPosts}}
        <h1 v-if="!user">Debe iniciar sesion para ver sus posts!</h1>
        <div class="cardContainer">
            <PostItem v-for="post in myPosts" :post="post" :key="post.id" />
        </div>
    </main>
</template>

<style scoped>
main {
    width: 100%;
    padding: 0.5rem 0;
}

.cardContainer {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}
</style>
