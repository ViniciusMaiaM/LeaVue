<template>
    <div>
        <button @click="first(txt1, $event), second(txt2, $event), third($event)">Activate Multiples Events</button>
        <!-- Quando se quer ativar multiplos eventos com uma ação devese separar com virgulas -->
        <p>{{ multiples_events }}</p>
    </div>
</template>

<script>
export default{
    name: "MultiplesEvents",
    data(){
        return{
            multiples_events: "",
            txt1: "First event",
            txt2: "Second event"
        }
    },
    methods:{
        first(txt,e){
            this.multiples_events=txt
        },
        second(txt,e){
            setTimeout(() => this.multiples_events = txt,500)
        },
        third(e){
            setTimeout(() => this.multiples_events = "",1500)
        }
    }

}
</script>

<style scoped>
    div{
        margin: 100px;
    }
</style>
