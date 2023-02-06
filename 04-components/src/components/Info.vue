<template>
    <div>
        <p v-if="working">I'm working at the moment.</p>
        <p v-else>Searching for a job.</p>
        <p>I use the following technologies:</p>
        <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
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
        data(){
            return{
                working: false,
                showEmail: true,
                email: 'viniciusmaiamarinho1@gmail.com',
                meu_link: 'https://google.com',
                //v-bind faz ligação entre um dado dinâmico e o que está no template
                button_text: 'Hide email'
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
