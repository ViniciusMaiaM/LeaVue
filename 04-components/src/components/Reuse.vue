<template>
    <div>
        <button @click="activate"> Click here</button>
        <span v-show="activated">Activated!</span>
    </div>
</template>

<script>
    export default{
        name: 'Reuse',
        data() {
            return {
                activated: false
            }
        },

        methods:{
            activate() {
                this.activated = !this.activated    
            }
        }
    }
</script>
