<script setup>
	import {ref} from "vue"
	import CardsSakura from './components/CardsSakura.vue'  import BtnReset from './components/BtnReset.vue';
  
	const objectFromChild = ref();
</script>

<template>
<main>
  <BtnReset />
		<CardsSakura @response="(data) => objectFromChild = data"/>
	</main>
</template>

<style></style>