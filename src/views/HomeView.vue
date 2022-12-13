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


/* const updateData = computed(() => {
  if(user.value){
    console.log(user);
    name.value = user.value.displayName
    email.value = user.value.email
  }
}) */

/* const posts = ref([
  {
    id: 1,
    name: 'Eduardo',
    photo: null,
    title: 'titulo1',
    body: 'En diseño gráfico, también se llama así a los textos sin sentido (como Lorem ipsum) que se ponen para ver cómo queda un texto cuyo contenido de momento no interesa.',
    date: Date.now(),
  },
  {
    id: 2,
    name: 'Marcos',
    photo: null,
    title: 'titulo2',
    body: 'En diseño gráfico, también se llama así a los textos sin sentido (como Lorem ipsum) que se ponen para ver cómo queda un texto cuyo contenido de momento no interesa.',
    date: Date.now(),
  },
  {
    id: 3,
    name: 'Eduardo',
    photo: null,
    title: 'titulo3',
    body: 'En diseño gráfico, también se llama así a los textos sin sentido (como Lorem ipsum) que se ponen para ver cómo queda un texto cuyo contenido de momento no interesa.',
    date: Date.now(),
  },
  {
    id: 4,
    name: 'Eduardo',
    photo: null,
    title: 'titulo4',
    body: 'En diseño gráfico, también se llama así a los textos sin sentido (como Lorem ipsum) que se ponen para ver cómo queda un texto cuyo contenido de momento no interesa.',
    date: Date.now(),
  },
]) */

/* const comments = ref([
  {
    id: 1,
    name: 'John Doe',
    email: '',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: '',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  }
]) */

/* onMounted(async () => {
  comments.value = await getComments()
}) */

/* const addNewComment = () => {
  addComment({
    id: crypto.randomUUID(),
    date: Date.now(),
    name: name.value,
    email: email.value,
    body: message.value
  })
  message.value = ''
} */

/* const addComment = () => {
  let comment = {
    id: comments.value.length + 1,
    name: name.value,
    email: email.value,
    body: message.value
  }
  comments.value.push(comment)
  name.value = ''
  email.value = ''
  message.value = ''
} */

</script>

<template>
  <main>
    <h1 v-if="user">New Post</h1>
    <NewPost v-if="user" />
    <!-- {{ updateData }} -->
    <h2>Posts</h2>
    <div class="cardContainer">
      <PostItem v-for="post in posts" :post="post" :key="post.id" />
      <!-- <div class="card" v-for="comment in comments" :key="comment.id">
        <h3>Author: {{ comment.name }}</h3>
        <div class="cardContent">
          <p>{{ comment.body }}</p>
        </div>
        <p class="muted">Mail: {{ comment.email }}</p>
        <button @click="deleteComment(comment.id)">Delete</button>
      </div> -->
    </div>
  </main>
</template>

<style scoped>

form{
  display: flex;
  flex-direction: column;
  max-width: 290px;
  margin: 0 auto;
  gap: 0.5rem;
}

input, textarea{
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea{
  resize: none;
}

button{
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #ccc;
  cursor: pointer;
}

.cardContainer{
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}
.card {
  position: relative;
  background: #f4f4f4;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 15rem;
  min-height: 5rem;
  min-width: 290px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.cardContent{
  display: flex;
  margin: 1rem 0;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;

}

.card button{
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

.muted{
  color: red;
  font-size: 0.7rem;
}
</style>
