<script setup>
import { onMounted } from 'vue'
import user from '../store/User.js'
import PostItem from '../components/PostItem.vue';
import { posts } from '../store/PostStore.js'
import NewPost from '../components/NewPost.vue';
import { getPosts } from '../firebase/posts.js';
import { getComments } from '../firebase/comments.js';

onMounted(() => {
  getPosts()
  getComments()
})

</script>

<template>
  <main>
    <NewPost v-if="user" />
    <div class="cardContainer">
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
    </div>
  </main>
</template>

<style scoped>

main{
  width: 100%;
  padding: 0.5rem 0;
}

.cardContainer{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
