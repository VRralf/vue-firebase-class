<script setup>
import { ref, computed } from 'vue';
import CommentItem from './CommentItem.vue';
import { comments } from '../store/PostStore.js'

const commentsWithId = ref([])

const props = defineProps({
    postId: '',
    typeOf: String,
})

const updateComments = computed(()=>{
    commentsWithId.value = comments.value.filter(comment => comment.postId === props.postId)
})

</script>

<template>
    {{ updateComments }}
    <div v-if="commentsWithId.length" class="commentContainer">
        <CommentItem v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />
    </div>
</template>

<style scoped>
.commentContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
}
</style>