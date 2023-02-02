const MyNameApp = { // Objeto Criado Com os dados que serão retornados para o html
    data() {
        return {
            name: "Vinicius",
            age: 19
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");
// Criando uma aplicação com o mesmo nome da constante e retornando ela pro id no html
