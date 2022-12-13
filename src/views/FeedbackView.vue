<script setup>
import FeedbackItem from '../components/FeedbackItem.vue';


</script>
<template>
    <h1>Gracias a todos!</h1>
    <div class="feedContainer">
        <FeedbackItem v-for="i in 10" />        
    </div>
</template>

<style scoped>
.feedContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
</style>