<template>
    <div>
        <img :src="avatar" :alt="description">
        <!-- Os dois pontos funcionam da mesma maneira que colocar o  v-bind -->
        <ChangeImage @change-image="changeImage"/>
    </div>
</template>

<script>
import ChangeImage from './ChangeImage.vue';
export default{
    name: 'Picture',
    components:{
        ChangeImage
    },
    data(){
        return{
            avatar: '/img/avatar.png',
            description: 'Vinicius Maia Avatar'
        }
    },
    methods:{
        changeImage(){
            this.avatar = "/img/avatar2.png"
        }
    }
}
</script>
