<script setup>
	import { ref, onUpdated } from 'vue';

	const props = defineProps(
	{
		card:
		{
			type: Number,
			default: 0,
		},
	})
	let		src = ref();
	
	if (props.card === 0)
		src.value = '/clowReverse.jpeg';
	else
		src.value = '/sakuraReverse.jpeg';

	onUpdated(() =>
	{
		if (props.card === 0)
			src.value = '/clowReverse.jpeg';
		else
			src.value = '/sakuraReverse.jpeg';
	})
	
	const	cardStyle = (counter) => 
	{
		return {transform: `translate(${-0.25 * counter}px, ${-0.25 * counter}px)`}
	}

</script>

<template>
	<figure class="deck">
		<img v-for="n in 55" :key="n" :src="src" :z-index="n - 1" :style="cardStyle(n)" class="card"/>
	</figure>
</template>

<style scoped>
.card
{
	position: absolute;
	width: 10%;
	left: 3rem;
    top: 2rem;
}
</style>