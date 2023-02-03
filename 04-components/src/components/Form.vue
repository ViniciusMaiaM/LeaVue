<template>
    <form action="">
        <div>
            <Input />
        </div>
        <div>
            <Input />
        </div>
        <div>
            <Submit />
        </div>
    </form>
</template>

<script>

    import Input from './form/Input.vue';
    import Submit from './form/Submit.vue';
    export default{
        name: 'Form',
        
        components:{
            Input,
            Submit
        }
    }
</script>
