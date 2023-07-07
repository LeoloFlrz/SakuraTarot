<script setup>
import { ref } from "vue";
import CardsSakura from './components/CardsSakura.vue';
import BtnReset from './components/BtnReset.vue';
import CardsDeck from './components/CardsDeck.vue';
import CardStages from './components/CardStages.vue';
import FooterSakura from './components/FooterSakura.vue'

const objectFromChild = ref();
const BooleanShuffle = ref();

</script>

<template>
	
	<main>
		<BtnReset @response="(reparto) => BooleanShuffle = reparto"/>
		<h2>Conoce tu destino</h2>
		<CardsSakura v-if ="BooleanShuffle" @response="(data) => objectFromChild = data" />
		
		<CardsDeck :card="1"/>
		<CardStages :data = "objectFromChild"/>
		<FooterSakura />
		
	</main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Shrikhand&display=swap');
body{	
	background-image:url('imgs/bg_light.jpeg');
	background-size: cover;
	min-height: 100vh;
}


</style>