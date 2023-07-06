<script setup>
import { ref } from "vue";
import CardsSakura from './components/CardsSakura.vue';
import BtnReset from './components/BtnReset.vue';
import CardsDeck from './components/CardsDeck.vue';
import CardStages from './components/CardStages.vue'

const objectFromChild = ref();
const BooleanShuffle = ref();

</script>

<template>
	
	<main>
		<BtnReset @response="(reparto) => BooleanShuffle = reparto"/>
		<CardsSakura v-if ="BooleanShuffle" @response="(data) => objectFromChild = data" />
		<CardsDeck />
		<CardStages />

		
	</main>
</template>

<style>
main{	background-image:url('imgs/bg_light.jpeg');
	background-size: cover;
} 
</style>