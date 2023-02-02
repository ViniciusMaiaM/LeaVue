<template>
	<div>
		<FirstComponent />
		<!-- Chamada de primeiro componente, ó exibindo no html -->
		<LifeCycle />
	</div>
</template>
<script>

	import FirstComponent from './components/FirstComponent.vue'; 
	import LifeCycle from './components/LifeCycle.vue';
	export default{
		name:'App',
		components: { //Determinando quais componentes vão estar na página
			FirstComponent,
			LifeCycle
		}
	}
</script>
