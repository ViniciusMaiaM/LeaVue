<template>
    <div>
        <button @click="$emit('changeImage')">Change Image</button>
    </div>
</template>

<script>
    export default{
        name: 'ChangeImage',
        emits: ['changeImage']
    }
</script>

<!--
    Com o emit é possível ouvir um evento de um componente filho no pai
    Podendo ativar comportamentos (como métodos) no pai
    O evento deve ser registrado no componente e é preciso definir o que será feito com a ativação
-->
