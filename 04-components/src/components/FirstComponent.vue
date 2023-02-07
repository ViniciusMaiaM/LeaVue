<template>
    <!-- Os elementos são colocados em uma div para que se possa enviar mais de um elemento -->
    <div>
        <h1>Hello Vue!</h1>
        <p>My name is {{ name }}, work as a {{ profission }}</p>
        <MultiplesEvents />
        <Reuse />
    </div>
</template>

<script>
    import MultiplesEvents from './MultiplesEvents.vue';
    import Reuse from './Reuse.vue';

    export default{
        name: 'FirstComponent',
        components: {
            MultiplesEvents,
            Reuse
        },
        data() {
            return{
                name: "Vinicius",
                profission: "Developer"
            }
        }
    }
</script>
