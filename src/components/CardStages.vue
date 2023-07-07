/** me llega la carta seleccionada? asignar carta seleccionada a etapa
correspondiente cuando se selecciona la carta para una etapa pasar a la
siguiente etapa cuando las 3 etapas tienen una carta seleccionada no tener la
opcion de seleccionar ninguna mas mostrar las 3 cartas asignadas a su etapa
mostrar significado de cada carta */

<script setup>
import { onBeforeUpdate, ref } from "vue";

const props = defineProps({
  data: {
    type: Object
  }
  
});

let card1, card1Meaning;
let card2, card2Meaning;
let card3, card3Meaning;
const arraySeleccionadas = []
const card1Src = ref()
const card2Src = ref()
const card3Src = ref()

onBeforeUpdate(() => {
  arraySeleccionadas.push(props.data);
    
    if (arraySeleccionadas.length === 1) {
      card1 = arraySeleccionadas[0]
      card1Src.value = card1.img
      card1Meaning = arraySeleccionadas[0].meaning
    }
     if (arraySeleccionadas.length === 2 ) {
      card2 = arraySeleccionadas[1]
      card2Src.value = card2.img
      card2Meaning = arraySeleccionadas[1].meaning
    } 
     if (arraySeleccionadas.length === 3 ) {
      card3 = arraySeleccionadas[2]
      card3Src.value = card3.img
      card3Meaning = arraySeleccionadas[2].meaning
    }
    return  card1, card1Src, card1Meaning, card2, card2Src, card2Meaning, card3, card3Src, card3Meaning
})


</script>

<template>
  <div class="containerEtapa">
    <h2>Conoce tu destino</h2>
    <div class="containerSeleccionadas">
      <div class="containerPasado">
        <p>Pasado</p> 
        <img :v-if="card1Src" :src="card1Src">
        <p>{{ card1Meaning }}</p>
      </div>
      <div class="containerPresente">
        <p>Presente</p> 
        <img :v-if="card2Src" :src="card2Src">
        <p>{{ card2Meaning }}</p>
      </div>
      <div class="containerFuturo">
        <p>Futuro</p>
        <img :v-if="card3Src" :src="card3Src">  
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

p {
  text-align: center;
}
</style>
