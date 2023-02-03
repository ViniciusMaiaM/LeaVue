<template>
	<div>
		<FirstComponent />
		<!-- Chamada de primeiro componente, ó exibindo no html -->
		<LifeCycle />
		<Person />
	</div>
</template>
<script>

	import FirstComponent from './components/FirstComponent.vue'; 
	import LifeCycle from './components/LifeCycle.vue';
	import Person from './components/Person.vue';
	export default{
		name:'App',
		components: { //Determinando quais componentes vão estar na página
			FirstComponent,
			LifeCycle,
			Person
		}
	}
</script>
