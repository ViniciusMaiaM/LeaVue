<template>
    <img :src="avatar" :alt="description">
    <!-- Os dois pontos funcionam da mesma maneira que colocar o  v-bind -->
</template>

<script>
export default{
    name: 'Picture',

    data(){
        return{
            avatar: '/img/avatar.png',
            description: 'Vinicius Maia Avatar'
        }
    }
}
</script>
