<template>
	<FirstComponent />
	<!-- Chamada de primeiro componente, ó exibindo no html -->
</template>
<script>

	import FirstComponent from './components/FirstComponent.vue'; 
	export default{
		name:'App',
		components: { //Determinando quais componentes vão estar na página
			FirstComponent
		}
	}
</script>
