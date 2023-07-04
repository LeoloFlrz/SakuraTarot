<script setup>
	import CardStages from './components/CardStages.vue';
	import GetData from './services/ApiService.js'
	import { onBeforeMount, ref } from 'vue';

	const	apiCall = new GetData();
	const	cardsData = ref();
	
	onBeforeMount(async() => 
	{
		cardsData.value = await apiCall.getData();
		console.log(cardsData.value);
	})

</script>


<template>
	<CardStages />
</template>