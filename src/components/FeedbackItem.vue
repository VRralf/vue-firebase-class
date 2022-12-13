<script setup>

const props = defineProps({
    feedback: {},
    typeof: Object
})

</script>

<template>
    <div class="card" :style="'background-color:' + feedback.color + ';'">
        <img :src="feedback.photo" alt="">
        <div class="contenido">
            <h1 :style="'color:' + feedback.color2 + ';'">{{ feedback.name }}</h1>
            <div class="soy">
                <h3>Soy {{ feedback.soy }}</h3>
            </div>
            <p :style="'background-color:' + feedback.color2 + ';color:' + feedback.color + ';'" class="feedback">
                {{ feedback.text }}</p>
            <div class="stars">
                <p>Calificion del curso: </p>
                <span @click="calificar(1)"
                    :class="feedback.calificacion > 0 ? 'material-symbols-outlined shine' : 'material-symbols-outlined'">
                    star
                </span>
                <span @click="calificar(2)"
                    :class="feedback.calificacion > 1 ? 'material-symbols-outlined shine' : 'material-symbols-outlined'">
                    star
                </span>
                <span @click="calificar(3)"
                    :class="feedback.calificacion > 2 ? 'material-symbols-outlined shine' : 'material-symbols-outlined'">
                    star
                </span>
                <span @click="calificar(4)"
                    :class="feedback.calificacion > 3 ? 'material-symbols-outlined shine' : 'material-symbols-outlined'">
                    star
                </span>
                <span @click="calificar(5)"
                    :class="feedback.calificacion > 4 ? 'material-symbols-outlined shine' : 'material-symbols-outlined'">
                    star
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 600px;
    min-height: 200px;
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color: palevioletred;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.44);
}

.card img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 0 0 20px;
}

/* .card div{
    height: 50%;
    width: 100%;
    border-radius: 0 0 25px 25px;
    padding: 15px;
} */

.stars {
    display: flex;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
    margin-bottom: 0.5rem;
    /* text-shadow: 1px 1px 1px white; */
}

.stars span {
    /* background-color: rgba(0, 0, 0, 0.283); */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
    filter: drop-shadow(2px 2px 5px black);
    transition: all 0.5s;
}

.stars span:hover {
    transform: scale(1.5);
}

.shine {
    color: yellow;
    font-variation-settings: 'FILL' 1;
    filter: drop-shadow(2px 2px 10px yellow);
}

.feedback {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: 10px;
    box-shadow: 2px 2px 10px black;
}

.contenido {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 5px 5px 5px;
}

.contenido h1 {
    width: 100%;
    text-align: end;
    padding-right: 20px;
}

.soy {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    text-shadow: 1px 1px 3px white;
}

.soy h3 {
    font-weight: bold;
    margin-right: 1.5rem;
}

.botones {
    display: flex;
    justify-content: flex-end;
    gap: 5px;
}



input,
textarea {
    border: none;
    border-radius: 5px;
    resize: none;
}

button {
    border: none;
    border-radius: 5px;
}

@media screen and (max-width:500px) {

    .card {
        flex-direction: column;
        height: max-content;
    }

    .card img {
        width: 50%;
        border-radius: 50%;
        margin: 1rem auto 0rem auto;
    }

    .contenido {
        width: 100%;
    }

    .contenido h1 {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
        padding-right: 20px;
    }

    .soy h3 {
        width: 100%;
        text-align: center;
    }

    .feedback {
        padding: 1rem;
        margin: 1rem;
    }

    .stars {
        flex-wrap: wrap;
        margin-bottom: 1rem;
    }

    .stars p {
        width: 100%;
        text-align: center;
    }
}
</style>
