<script setup>
import { ref } from "vue";
import CardsSakura from './components/CardsSakura.vue';
import CardsDeck from './components/CardsDeck.vue';
import BtnReset from './components/BtnReset.vue';
import CardStages from './components/CardStages.vue'

const objectFromChild = ref();
</script>

<template>
	<CardsDeck />
	<main>
		<BtnReset />
		<CardsSakura @response="(data) => objectFromChild = data" />
			<CardStages />
	</main>
</template>

<style></style>