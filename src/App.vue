<script setup>
	import GetData from './services/ApiService.js'
	import { onBeforeMount, ref } from 'vue';
  import BtnReset from './components/BtnReset.vue';

	const	apiCall = new GetData();
	const	cardsData = ref();
	
	onBeforeMount(async() => 
	{
		cardsData.value = await apiCall.getData();
		console.log(cardsData.value);
	})

</script>


<template>
	<!-- <p>{{ cardsData }}</p> -->
  <BtnReset />

</template>