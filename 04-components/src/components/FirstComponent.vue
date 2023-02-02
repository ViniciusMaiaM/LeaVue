<template>
    <!-- Os elementos são colocados em uma div para que se possa enviar mais de um elemento -->
    <div>
        <h1>Hello Vue!</h1>
        <p>My name is {{ name }}, work as a {{ profission }}</p>
    </div>
</template>

<script>
    export default{
        name: 'FirstComponent',
        data() {
            return{
                name: "Vinicius",
                profission: "Developer"
            }
        }
    }
</script>
