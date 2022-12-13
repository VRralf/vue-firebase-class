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
    <CommentItem v-for="comment in commentsWithId" :comment="comment" :key="comment.id" />
</template>