<script setup>
    
    import GetData from '../services/ApiService.js'
	import { onBeforeMount, ref, defineEmits } from 'vue';

	const apiCall = new GetData();
	const cardsData = ref();
	let cards = ref([]);
    let randoms = [];
    let clickCard = ref('');
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
                    meaning:"",
                }
                card.id = random;
                card.img = imgCard;
                cards.value.push(card);
            };
        };
    })

function showCard(id) {
	if (count.value < 3) {
		clickCard.value = cards.value.find((card) => card.id === id).img;
		const data = cards.value.find((card) => card.id === id).id;
		emit('response', data);
		count.value++;
	}
}
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
    
</script>


<template>
	<div class="flex">
		<img v-for="card in cards" :key="card.id" :src="card.img" class="classImg" @click="showCard(card.id)">
	</div>
	<v-overlay v-model="overlay" class="align-center justify-center" scrim="#481566" @click="overlay = false">
		<div class="cardBig">
			<img :src="clickCard" class="cardSelected">
		</div>
	</v-overlay>
</template>

<style>
    .flex{
        margin: 0 auto;
        width:15%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: .01rem;
				
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
</style> -->

<script setup>
import GetData from '../services/ApiService.js';
import { onBeforeMount, ref, defineEmits } from 'vue';

const apiCall = new GetData();
const cardsData = ref(null);
const cards = ref([]);
const randoms = [];
const clickCard = ref('');
const count = ref(0);
const overlay = ref(false);
const emit = defineEmits(['response']);

onBeforeMount(async () => {
	cardsData.value = await apiCall.getData();

	while (randoms.length < 9) {
		const random = Math.floor(Math.random() * 55);
		const exist = randoms.filter((r) => r === random);
		if (exist.length === 0) {
			randoms.push(random);
			const imgCard = cardsData.value.data[random].clowCard;
			const card = {
				id: random,
				img: imgCard,
			};
			cards.value.push(card);
		}
	}
});

function showCard(id) {
	if (count.value < 3) {
		clickCard.value = cards.value.find((card) => card.id === id).img;
		const data = cards.value.find((card) => card.id === id).id;
		emit('response', data);
		count.value++;
		overlay.value = true;
	}
}
</script>

<template>
		<v-container class="align-center justify-center">
			<v-row>
				<v-col cols="4" v-for="card in cards" :key="card.id">
					<v-img :src="card.img" @click="showCard(card.id)" elevation="12" height="33vmin" class="mx-auto rounded-lg"></v-img>
				</v-col>
			</v-row>
		</v-container>
		<v-overlay v-model="overlay" class="align-center justify-center" scrim="#795176" @click:outside="overlay = false">
			<v-img :src="clickCard" class="rounded-lg"></v-img>
		</v-overlay>
</template>


<style scoped>
/*scrim="#f9a245"*/
</style>
