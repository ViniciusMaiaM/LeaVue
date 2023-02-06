<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contacts</a></li>
    </ul>
</template>

<script>
    export default{
        name: 'Header'
    }
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
        background-color: #999;
        justify-content: center;
    }

    li{
        margin-right: 10px;
    }

    a{
        color: #DDD;
        text-decoration: none;
        transition: .5s;
    }

    a:hover{
        color: turquoise;
    }
</style>
