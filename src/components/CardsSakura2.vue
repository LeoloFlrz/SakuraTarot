<script setup>
import GetData from '../services/ApiService.js';
import { onBeforeMount, ref, defineEmits } from 'vue';

const apiCall = new GetData();
const cardsData = ref(null);
const cards = ref([]);
let randoms = [];
let clickCard = ref('');
let count = ref(0);
const overlay = ref(false);
let emit = defineEmits(['response']);

onBeforeMount(async () => {
  cardsData.value = await apiCall.getData();

  while (randoms.length < 9) {
    const random = Math.floor(Math.random() * 55);
    let exist = randoms.filter((r) => r === random);
    if (exist.length === 0) {
      randoms.push(random);
      let imgCard = cardsData.value.data[random].clowCard;
      let card = {
        id: random,
        img: imgCard,
      };
      cards.value.push(card);
    }
  }
});

function showCard(id) {
  console.log(id);
  if (count.value < 3) {
    const foundCard = cards.value.find(card => card.id === id);
    if (foundCard) {
      clickCard.value = foundCard.img;
      emit('response', foundCard);
      count.value++;
      overlay.value = true;
    }
  }
}
</script>

<template>
  <div>
    <v-container class="pa-0">
      <v-row>
        <v-col cols="4" sm="4" v-for="card in cards" :key="card.id">
          <v-img src="/imgs/Reverso-Clow.jpg" @click="showCard(card.id)" height="33vmin"
            class="mx-auto rounded-lg"></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-overlay v-model="overlay" class="align-center justify-center" scrim="#795176" @click:outside="overlay = false">
      <v-img :src="clickCard" class="rounded-lg" height="80vh"></v-img>
    </v-overlay>
  </div>
</template>


<style scoped>
/*scrim="#f9a245"*/
div {
  width: 50vw;
  margin: 0 auto;
}
</style>
