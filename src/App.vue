<script setup>
	import {ref} from "vue"
	import CardsSakura from './components/CardsSakura.vue'
	const objectFromChild = ref();
</script>

<template>
	<main>
		<CardsSakura @response="(data) => objectFromChild = data"/>
	</main>
</template>

<style></style>