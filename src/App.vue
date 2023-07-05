<script setup>
	import {ref} from "vue"
	import CardsSakura2 from './components/CardsSakura2.vue'
	const objectFromChild = ref();
</script>

<template>
	<main>
		<CardsSakura2 @response="(data) => objectFromChild = data"/>
	</main>
</template>

<style></style>