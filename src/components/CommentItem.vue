<script setup>

const props = defineProps({
    comment: {},
    typeof: Object,
})

</script>

<template>
    <div class="card">
        <div class="cardHeader">
            <h3>{{ comment.name }}</h3>
            <img :src="comment.photo? comment.photo : 'https://picsum.photos/200'" alt="">
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
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-top: 0.5rem;
}

.cardHeader{
    display: flex;
    justify-content: space-between;
    height: 2rem;
    align-items: center;
    gap: 0.3rem;
    padding: 10px;
}

.cardHeader img{
    height: 300%;
    border-radius: 1rem 1rem 0 0;
}

.cardContent {
    display: flex;
    flex-direction: column;
    background-color: white;

    border-radius: 0 0 5px 5px;
    padding: 5px;
}

</style>