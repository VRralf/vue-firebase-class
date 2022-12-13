<script setup>

import { onMounted, ref, computed } from 'vue';
import FeedbackItem from '../components/FeedbackItem.vue';
import MyFeedback from '../components/MyFeedback.vue';
import { feedbacks } from '../store/PostStore.js';
import { getComments } from '../firebase/feedbacks.js';
import user from '../store/User.js';

const posted = ref(false)

onMounted(()=>{
    getComments()
})

const isMyPosted = computed(()=>{
    if(user.value){
        posted.value = feedbacks.value.some(feed => feed.email === user.value.email)
    }
})






</script>
<template>
    {{isMyPosted}}
    <h1>Gracias a todos!</h1>
    <h2 v-if="feedbacks.length == 0">No hay valoraciones para mostrar...</h2>
    <MyFeedback v-if="user && !posted" />
    <div class="feedContainer">
        <FeedbackItem v-for="feedback in feedbacks" :feedback="feedback" />        
    </div>
</template>

<style scoped>
.feedContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
}
</style>