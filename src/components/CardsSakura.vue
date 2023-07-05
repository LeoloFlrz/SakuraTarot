<script setup>
    import GetData from '../services/ApiService.js';
    import { onBeforeMount, ref} from 'vue';

    const apiCall = new GetData();
    const cardsData = ref();
    let cards = ref([]);
    let randoms = [];
    let clickCard = ref();
    let count = ref(0);
    const overlay = ref(false);
    let emit = defineEmits(['response']);

    onBeforeMount(async () => {
        cardsData.value = await apiCall.getData();

        while (randoms.length < 9) {
            const random = Math.floor(Math.random() * 55);
            const exist = randoms.filter((r) => r === random);
            if (exist.length === 0) {
                randoms.push(random);
                let card = {
                    id: random,
                    img: cardsData.value.data[random].clowCard,
                    meaning: cardsData.value.data[random].meaning,
                };
                cards.value.push(card);
            }
        }
    });

    function showCard(id) {
        if (count.value < 3) {
            clickCard.value = cards.value[id].img;
            const data = cards.value[id];
            emit('response', data);
            count.value++;
            overlay.value = true;
        }
    }
    </script>

<template>
		<v-container class="align-center justify-center">
			<v-row>
				<v-col cols="4" v-for="n in 9" :key="n">
					<v-img src="/imgs/clowReverse.jpg" @click="showCard(n-1)" elevation="12" height="33vmin" class="mx-auto rounded-lg"></v-img>
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
