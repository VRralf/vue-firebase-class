import { ref } from 'vue';

const posts = ref([
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
])

const comments = ref([
    {
        id: 1,
        postId: 1,
        photo: null,
        name: 'Ivan',
        body: 'Comentario random 1',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 1,
        photo: null,
        name: 'Ivan',
        body: 'Comentario random 2',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 1,
        photo: null,
        name: 'Ivan',
        body: 'Comentario random 3',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 2,
        photo: null,
        name: 'Eduardo',
        body: 'Comentario random 4',
        date: Date.now(),
    },
    {
        id: 1,
        postId: 2,
        photo: null,
        name: 'Eduardo',
        body: 'Comentario random 5',
        date: Date.now(),
    },
])

export { posts, comments }