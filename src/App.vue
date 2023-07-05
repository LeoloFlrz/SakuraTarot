<script setup>
import { ref } from "vue";
import CardsSakura from './components/CardsSakura.vue';
//import CardsDeck from './components/CardsDeck.vue';
import BtnReset from './components/BtnReset.vue';
import CardStages from "./components/CardStages.vue";
const BooleanShuffle = ref();
const objectFromChild = ref();
</script>


<template>
<main>
	<BtnReset @response="(reparto) => BooleanShuffle = reparto"/>
	<CardsSakura v-if = "BooleanShuffle" @response="(data) => objectFromChild = data"/>
	<CardStages />
</main>
</template>

<style></style>
	

