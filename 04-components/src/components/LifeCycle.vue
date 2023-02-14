<template>
    <h1>My name is: {{ name }}</h1>
</template>

<script>
    export default{
        name: 'LifeCycle',
        data() {
            return{
                name: 'Still do not know'
            }
        },
        created(){ 
            setTimeout(() => { //Troca para esse nome após o tempo de timeout
                this.name = 'Vinicius'
            }, 1000);
        },
        mounted() {
            setTimeout(() =>{
                this.name = 'Test'
            }, 2000);

            this.lifeCycle();
        },
        methods: {
            lifeCycle() {
                console.log("Array!");
            }
        }
    }
</script>
