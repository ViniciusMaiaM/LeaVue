<template>
    <div>
        <p v-if="working">I'm working at the moment.</p>
        <p v-else>Searching for a job.</p>
        <p>I use the following technologies to back-end:</p>
        <ul>
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">
                {{ technology }}
            </li>
            <!-- 
                Dessa maneira é possível percorrer a lista que foi declarada em data e exibir um li para cada tecnologia
                o v-for funciona, mas requisita um id, por isso o index foi declarado como key no v-bind
            -->
        </ul>
        <p>I use the following technologies to front-end:</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id"> 
                {{ technology.language }}
                <!--
                    Utilizando um objeto a sintaxe fica dessa maneira, já que se quer apenas o dado
                    e a key já é o proprio id que foi declarado dentro do objeto
                -->
            </li>
        </ul>
        <div>
            <button @click="show_email">{{button_text}}</button>
        </div>
        <p v-show="showEmail">Send a message to: {{ email }}</p>
        <p>To acess my portfolio <a v-bind:href="meu_link">click here</a></p>
        <!-- v-bind é utilizada para fazer ligações e dar valores dinamicos as tags html -->
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue';
    export default{
        name: 'Info',
        components: {
            Picture
        },
        props:{
            email: String,
            // Declaração do que o componente vai receber
        },
        data(){
            return{
                working: false,
                showEmail: true,
                meu_link: 'https://google.com',
                //v-bind faz ligação entre um dado dinâmico e o que está no template
                button_text: 'Hide email',
                backend_technologies: ['JavaScript', 'TypeScript', 'Python'],
                frontend_technologies: [
                    {id:1, language: 'HTML'},
                    {id:2, language: 'CSS'},
                    {id:3, language: 'Vue'}
                ]
            }
        },
        methods: {
            show_email(){
                this.showEmail = !this.showEmail
                if(!this.showEmail){
                    this.button_text = "Show email"
                }else{
                    this.button_text = "Hide email"
                }
            }
        }
    }
</script>
