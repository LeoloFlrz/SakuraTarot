<script setup>
import { ref } from "vue";
import CardsSakura from './components/CardsSakura.vue';
import CardsDeck from './components/CardsDeck.vue';
import BtnReset from './components/BtnReset.vue';

const objectFromChild = ref();
</script>

<template>
	<main>
		<BtnReset />
		<CardsSakura @response="(data) => objectFromChild = data" />
	</main>
		<CardsDeck></CardsDeck>
</template>

<style></style>