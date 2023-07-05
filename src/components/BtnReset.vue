<template>
    <div class="logo">
        <v-img height="80" src="/imgs/Site-logo_sakura.webp" />
    </div>
    <div>
        <v-btn class="overcard" variant="plain" @click="selectCards">Nueva tirada</v-btn>
    </div>
</template>

<script>
// import GetData from './src/services/ApiService.js';

// const APIUrl = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/';
// const getDataInstance = new GetData();

// export default {
//   methods: {
//     async selectCards() {
//       try {
//         const response = await getDataInstance.getData();
//         const cards = response.data;

//         const selectedCards = getRandomCards(cards, 9);
//         console.log(selectedCards); 

//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
// };

// function getRandomCards(cards, count) {
//   const shuffledCards = shuffleArray(cards);
//   return shuffledCards.slice(0, count);
// }

// function shuffleArray(array) {
//   const newArray = [...array];
//   for (let i = newArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//   }
//   return newArray;
// }
</script>
