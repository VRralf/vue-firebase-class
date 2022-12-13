<template>
    <div class="card">
        <img src="https://images.pexels.com/photos/2272853/pexels-photo-2272853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
        <div>
            <h1>Eduardo Mendoza</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea similique incidunt, accusamus ad quos dolore temporibus voluptatibus fuga et nobis voluptates quibusdam tempore, a voluptas? Quia perferendis optio deleniti.</p>
        </div>
    </div>
</template>

<style scoped>
.card{
    width: 290px;
    height: 500px;
    display: flex;
    flex-direction: column;
}

.card img{
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
}

.card div{
    background-color: cadetblue;
    height: 50%;
    width: 100%;
    border-radius: 0 0 25px 25px;
    padding: 15px;
}
</style>
