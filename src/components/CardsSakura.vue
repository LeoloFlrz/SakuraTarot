<script setup>
    import GetData from '../services/ApiService.js';
    import { onBeforeMount, ref, watch} from 'vue';

    const apiCall = new GetData();
    const cardsData = ref();
    let cards = ref([]);
    let threeCards = [];
    let randoms = [];
    let clickCard = ref();
    let count = ref(0);
    const overlay = ref(false);
    watch(overlay, val => {
        val && setTimeout(() => {
            overlay.value = false
        }, 2000)
    });
    let emit = defineEmits(['response']);

    onBeforeMount(async () => {
        cardsData.value = await apiCall.getData();
        while (randoms.length < 9) {
            const random = Math.floor(Math.random() * 55);
            const exist = randoms.filter((r) => r === random);
            let imgCard = cardsData.value.data[random].sakuraCard;
            let meaningCard = cardsData.value.data[random].meaning;
            if (exist.length === 0) {
                randoms.push(random);
                let card = {
                    id: random,
                    img: imgCard,
                    meaning: meaningCard,
                };
                cards.value.push(card);
            }
        }
    });

    function showCard(id) {
        console.log(id);
        const exist = threeCards.filter((r) => r === id);
        if (count.value < 3 && exist.length == 0) {
            clickCard.value = cards.value[id].img;
            const data = cards.value[id];
            emit('response', data);
            count.value++;
            overlay.value = true;
            threeCards.push(id);
        }
    }
</script>

<template>
		<v-container class=" containerCard align-center justify-center">
			<v-row>
				<v-col cols="4" v-for="n in 9" :key="n">
					<v-img src="/imgs/sakuraReverse.jpg" @click="showCard(n-1)" clas="pointer" elevation="12" class="imageCard mx-auto rounded-lg pa-2"></v-img>
				</v-col>
			</v-row>
		</v-container>
		<v-overlay v-model="overlay" class="align-center justify-center" scrim="#795176" @click:outside="overlay = false" >
			<v-img :src="clickCard" class="rounded-lg"></v-img>
		</v-overlay>
</template>


<style scoped>
/*scrim="#f9a245"*/
.containerCard{
    max-width: 18vmax;
    cursor: url('/imgs/magicWand_Sakura.png'), pointer;
}

@media screen and (max-width: 480px) {
.containerCard {
    max-width: 220px;
    margin: 20px auto;
    padding: 0;
    cursor: url('/imgs/magicWand_Sakura.png'), pointer;
  }
.imageCard {
    padding: 0;
}
}

</style>
