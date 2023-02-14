<template>
    <div>
        <h2>That's the description of the person: {{ name }}</h2>
        <Info :email="email" />
        <!-- Passagem do dado (props) que irá para o componente -->
        <Form />
    </div>
</template>

<script>
    import Info from './Info.vue';
    import Form from './Form.vue';
    export default{
        name: 'Person',
        
        components: {
            Info,
            Form
        },

        data(){
            return{
                name: 'Vinicius',
                email: 'viniciusmaiamarinho1@gmail.com'
            }
        }
    }
</script>
