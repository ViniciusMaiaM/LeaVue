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
        <p v-show="show_email">Send a message to: {{ email }}</p>
    </div>
</template>

<script>
    export default{
        name: 'Info',

        data(){
            return{
                working: false,
                show_email: true,
                email: 'viniciusmaiamarinho1@gmail.com'
            }
        }
    }
</script>
