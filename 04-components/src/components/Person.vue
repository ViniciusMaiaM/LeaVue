<template>
    <div>
        <h2>That's the description of the person: {{ name }}</h2>
        <Info />
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
                name: 'Vinicius'
            }
        }
    }
</script>
