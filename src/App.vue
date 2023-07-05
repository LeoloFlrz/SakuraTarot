<script setup>
import { ref } from "vue";
import CardsSakura from './components/CardsSakura.vue';
import CardsDeck from './components/CardsDeck.vue';
import BtnReset from './components/BtnReset.vue';

const objectFromChild = ref();
</script>

<template>
	<CardsDeck />
	<main>
		<BtnReset />
		<CardsSakura @response="(data) => objectFromChild = data" />
	</main>
</template>

<style></style>