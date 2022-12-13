<script setup>

const props = defineProps({
    comment: {},
    typeof: Object,
})

</script>

<template>
    <div class="card">
        <div class="cardHeader">
            <img :src="comment.photo? comment.photo : 'https://picsum.photos/200'" alt="">
            <h3>{{ comment.name }}</h3>
        </div>
        <div class="cardContent">
            <p>{{ comment.text }}</p>
        </div>
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
    background: #f4f4f4;
    background-color: pink;
    padding: 1rem;
    margin-bottom: 1rem;
    width: 15rem;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 0.5rem;
}

.cardHeader{
    display: flex;
    height: 2rem;
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
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
}

</style>