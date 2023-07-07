<script setup>
import {ref} from 'vue';
let emit = defineEmits(['response']);
let reparto = ref(false);

function tirada(){
	if (reparto.value === true)
	{
		reparto.value = !reparto.value;
		emit('response', reparto.value)
		setTimeout(() => 
		{
			reparto.value = !reparto.value;
			console.log(reparto.value);
			emit('response', reparto.value)
		}, 1000)
	}
	else
	{
		reparto.value = !reparto.value;
		emit('response', reparto.value)
	}
}
</script>

<template>
   
    
    <div class="logo">
        <v-img height="13vmin" src="/imgs/Site-logo_sakura.webp" />
    </div>
    
    <div class="g-deck">
        <v-btn class="overcard" variant="plain" @click=tirada()>Nueva <br> tirada</v-btn>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Shrikhand&display=swap');
.logo{
    display: flex;
    justify-content:center ;
    margin-top: 2rem;
}
.overcard{
    margin-top: 2rem;
    z-index: 55; 
    background-color: rgba(255, 0, 0, 0.5);
    }

.v-btn__content{
    color:white;
    font-weight: bolder;
}
.g-deck{
    position: absolute;
    left: 3rem;
	top: 5rem; 
    font-family:'Gochi Hand', cursive; 
    /* 'Shrikhand', cursive;  */
}


</style>