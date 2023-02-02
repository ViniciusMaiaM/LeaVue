const MyNameApp = { // Objeto Criado Com os dados que serão retornados para o html
    data() {
        return {
            name: "",
            input_name: "" //Variável linkada ao input
        }
    },
    methods: { //Funções da aplicação
        submitForm(e) {
            e.preventDefault(); //Resgate do evento, fazendo com formulário não seja enviado para o servidor
        
            this.name = this.input_name; //O valor do html vai ser passar a ser o nome que foi digitado
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");
// Criando uma aplicação com o mesmo nome da constante e retornando ela pro id no html
