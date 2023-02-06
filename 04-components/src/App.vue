<template>
	<div>
		<Header />
		<FirstComponent />
		<!-- Chamada de primeiro componente, o exibindo no html -->
		<LifeCycle />
		<Person />
	</div>
</template>
<script>
	import Header from './components/Header.vue';
	import FirstComponent from './components/FirstComponent.vue'; 
	import LifeCycle from './components/LifeCycle.vue';
	import Person from './components/Person.vue';
	export default{
		name:'App',
		components: { //Determinando quais componentes vão estar na página
			Header,
			FirstComponent,
			LifeCycle,
			Person
		}
	}
</script>

<!-- 
	O css global normalmente é definido no app
	Já com o scoped cada componente pode ter seu estilo

-->

<style>
	body{
		background-color: #333;
		color: #fff;
	}

	a{
		color: red;
	}
</style>
