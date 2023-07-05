<script setup>
    
    import GetData from '../services/ApiService.js'
	import { onBeforeMount, ref } from 'vue';
	const apiCall = new GetData();
	const cardsData = ref();
	let cards = ref([]);
    let randoms = [];
    let clickCard = ref();
    let count = ref(0);
    let emit = defineEmits(['response']);
    
	onBeforeMount(async() => 
	{
		cardsData.value = await apiCall.getData();
     
        while (randoms.length < 9) {
            const random = Math.floor(Math.random() * 55);
            let exist = randoms.filter((r) => r == random);
            if (exist.length == 0) {
                randoms.push(random);
                let imgCard = cardsData.value.data[random].clowCard;
                let card = {
                    id: "",
                    img: "",
                    meaning: ""
                };
                card.id = random;
                card.img = imgCard;
                card.meaning = cardsData.value.data[random].meaning;
                cards.value.push(card);
            };
        };
    })

function showCard(id) {
    console.log(id);
    let existCard = cards.value.filter((r) => r == id);
    if (existCard.length > 0) {
        count.value = count.value - 1;
    } else if ((count.value < 3) && (existCard.length == 0)) {
        clickCard.value = cards.value[id].img;
        let data = cards.value[id];
        emit('response', data);
        count.value++;
    };
};
    
</script>
<template>
  
    <div class="flex" > 
        <img v-for="n in 9" :key="n" src="/imgs/Reverso-Clow.jpg" class="classImg" @click="showCard(n-1)">
    </div>
    <div class="cardBig">
        <img :src="clickCard" class="cardSelected">
    </div>

</template>
<style>
    .flex{
        margin: 0 auto;
        width:15%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: .05rem;
    }

    .classImg{
        width: 33%;
    }

    .cardBig{
        margin: 0 auto;
        margin-top: 1%;
        width:15%;
        display: flex;
        flex-direction: row;
    }
    .cardSelected{
        width: 100%;
    }
</style>