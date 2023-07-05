<script setup>
	import CardStages from './components/CardStages.vue';
	import {ref} from "vue"
	import CardsSakura from './components/CardsSakura.vue'
	const objectFromChild = ref();


</script>


<template>
	<main>
		<CardStages />
		<CardsSakura @response="(data) => objectFromChild = data"/>
	</main>
</template>

<style></style>
	

