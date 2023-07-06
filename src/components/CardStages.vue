/** me llega la carta seleccionada? asignar carta seleccionada a etapa
correspondiente cuando se selecciona la carta para una etapa pasar a la
siguiente etapa cuando las 3 etapas tienen una carta seleccionada no tener la
opcion de seleccionar ninguna mas mostrar las 3 cartas asignadas a su etapa
mostrar significado de cada carta */

<script setup>
import { onBeforeUpdate } from "vue";

const props = defineProps({
  data: {
    type: Object
  }
});

let card1, card1Img, card1Meaning;
let card2, card2Img, card2Meaning;
let card3, card3Img, card3Meaning;
// const contador = ref(0);
const arraySeleccionadas = []

// onUpdated(() => {
//     arraySeleccionadas.push(props.data);
    
//     // arraySeleccionadas.value[0] = "Hola"

//     if (arraySeleccionadas.length === 1) {
//       card1 = arraySeleccionadas[0]
//       console.log(card1);
//     }
//      if (arraySeleccionadas.length === 2 ) {
//       card2 = arraySeleccionadas[1]
//       console.log(card2);
//     } 
//      if (arraySeleccionadas.length === 3 ) {
//       card3 = arraySeleccionadas[2]
//       console.log(card3);
//     }
//     console.log(arraySeleccionadas);
//     return card1, card2, card3
// })
onBeforeUpdate(() => {
  arraySeleccionadas.push(props.data);
    
    // arraySeleccionadas.value[0] = "Hola"

    if (arraySeleccionadas.length === 1) {
      card1 = arraySeleccionadas[0]
      card1Img = arraySeleccionadas[0].sakuraCard
      card1Meaning = arraySeleccionadas[0].meaning
      console.log(card1);
    }
     if (arraySeleccionadas.length === 2 ) {
      card2 = arraySeleccionadas[1]
      card2Img = arraySeleccionadas[1].sakuraCard
      card2Meaning = arraySeleccionadas[1].meaning
      console.log(card2);
    } 
     if (arraySeleccionadas.length === 3 ) {
      card3 = arraySeleccionadas[2]
      card3Img = arraySeleccionadas[2].sakuraCard
      card3Meaning = arraySeleccionadas[2].meaning
      console.log(card3);
    }
    console.log(arraySeleccionadas);
    return { card1, card1Img, card1Meaning, card2, card2Img, card2Meaning, card3, card3Img, card3Meaning}
})


</script>

<template>
  <div class="containerEtapa">
    <h2>Conoce tu destino</h2>
    <div class="containerSeleccionadas">
      <div class="containerPasado">
        <p>Pasado {{ card1 }}</p> 
        <img  >{{ card1Img }}<img/>
        <p>{{ card1Meaning }}</p>
      </div>
      <div class="containerPresente">
        <p>Presente {{ card2 }}</p> 
        <img>{{ card2Img }}<img/>
        <p>{{ card2Meaning }}</p>
      </div>
      <div class="containerFuturo">
        <p>Futuro {{ card3 }}</p>
        <img> {{ card3Img }} <img/>
        <p>{{ card3Meaning }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerEtapa {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.containerSeleccionadas {
  display: flex;
  justify-content: center;
  padding-top: auto;
  gap: 1rem;
}
</style>
