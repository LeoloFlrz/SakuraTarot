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

let card1;
let card2;
let card3;
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
      console.log(card1);
    }
     if (arraySeleccionadas.length === 2 ) {
      card2 = arraySeleccionadas[1]
      console.log(card2);
    } 
     if (arraySeleccionadas.length === 3 ) {
      card3 = arraySeleccionadas[2]
      console.log(card3);
    }
    console.log(arraySeleccionadas);
    return card1, card2, card3
})


</script>

<template>
  <div class="containerEtapa">
    <h2>Conoce tu destino</h2>
    <div class="containerSeleccionadas">
      <div class="containerPasado">Pasado {{ card1 }}</div>
      <div class="containerPresente">Presente {{ card2 }}</div>
      <div class="containerFuturo">Futuro {{ card3 }}</div>
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
