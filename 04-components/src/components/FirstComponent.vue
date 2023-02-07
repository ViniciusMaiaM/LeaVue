<template>
    <!-- Os elementos são colocados em uma div para que se possa enviar mais de um elemento -->
    <div>
        <h1>Hello Vue!</h1>
        <p>My name is {{ name }}, work as a {{ profission }}</p>
        <MultiplesEvents />
    </div>
</template>

<script>
    import MultiplesEvents from './MultiplesEvents.vue';
    export default{
        name: 'FirstComponent',
        components: {
            MultiplesEvents
        },
        data() {
            return{
                name: "Vinicius",
                profission: "Developer"
            }
        }
    }
</script>
