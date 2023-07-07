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
		<div class="tittle">
			<h2>CONOCE TU DESTINO</h2>
		</div>
		
		<CardsSakura v-if ="BooleanShuffle" @response="(data) => objectFromChild = data" />
		
		<CardsDeck :card="1"/>
		<CardStages  v-if ="BooleanShuffle" :data = "objectFromChild"/>
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

.tittle{
    display: flex;
    justify-content:center ;
    margin-top: 2rem;
}

h2{
	font-family:'Gochi Hand', cursive;
	font-size: 5rem;
	text-align: center;
	color:#F66AA3;
	text-shadow: 0.07em 0.07em 0.02em white;
	font-weight: bold;
}

@media screen and (max-width: 480px) {
	h2{
		font-size: 2rem;
	};
}

</style>