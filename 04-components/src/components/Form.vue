<template>
    <div>
        <h2>Meu formulário</h2>
        <form action="" @submit="sendForm($event)">
            <!-- Declarando o event se tem acesso a esse objeto dentro do metodo -->
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit />
            </div>
        </form>
    </div>
</template>

<script>

    import Input from './form/Input.vue';
    import Submit from './form/Submit.vue';
    export default{
        name: 'Form',
        
        components:{
            Input,
            Submit
        },
        data() {
            return{
                name: "",
                email: ""
            }
        },
        methods:{
            sendForm(e){

                e.preventDefault();

                const name = this.name;
                const email = this.email;



                console.log("Form sended");
                console.log("The name is: " + name)
                console.log("The email is: " + email)
            }
        }
    }
</script>

<style scoped>
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 20px;
    }
</style>
