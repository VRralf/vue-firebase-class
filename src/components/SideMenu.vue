<script setup>
import user from '../store/User.js'

const emits = defineEmits(['hideMenu'])
</script>

<template>
    <div class="menu1">
        <ul>
            <li v-if="user"><h1>{{user.displayName}}</h1></li>
            <li v-if="user">{{user.email}}</li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/">Posts</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/myposts">Mis post</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/valoraciones">Valoraciones</RouterLink></li>
            <li><RouterLink @click="emits('hideMenu')" active-class="active" to="/login">Login</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
.menu1{
    z-index: 13;
    top: 72px;
    width: 100%;
    display: flex;
    justify-content: center;
}

ul{
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 90%;
}

ul li{
    width: 100%;
    color: black;
    list-style: none;
}

li a{
    display: inline-block;
    width: 100%;
    text-align: center;
    background-color: palevioletred;
    padding: 0.5rem;
    text-decoration: none;
    font-weight: bold;
    color: white;
    border-radius: 10px;
    transition: all 0.5s;
}

li a:hover{
    background-color: pink;
    transform: scale(1.05);
}

.active{
    animation: brillar 2s infinite ease-in-out;
}

@keyframes brillar{
    0%{
        background-color: pink;
    }
    50%{
        background-color: palevioletred;
        transform: scale(1.05);
    }
    100%{
        background-color: pink;
    }
}
</style>