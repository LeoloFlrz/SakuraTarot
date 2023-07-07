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
const card1Src = ref('');
const card2Src = ref('');
const card3Src = ref('');

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
    //return  card1, card1Src, card1Meaning, card2, card2Src, card2Meaning, card3, card3Src, card3Meaning
})


</script>

<template>
  <div class="containerEtapa">
    <div class="containerSeleccionadas">
      <div v-if="card1Src" class="containerPasado">
        <h2>Pasado</h2> 
        <img class="cardImg" :src="card1Src">
        <p>{{ card1Meaning }}</p>
      </div>
      <div v-if="card2Src" class="containerPresente">
        <h2>Presente</h2> 
        <img class="cardImg" :src="card2Src">
        <p>{{ card2Meaning }}</p>
      </div>
      <div v-if="card3Src" class="containerFuturo">
        <h2>Futuro</h2>
        <img class="cardImg" :src="card3Src">  
        <p>{{ card3Meaning }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerEtapa {
  font-family: 'Shrikhand', cursive;
  font: 1em,;
  font-weight: lighter;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* align-items: center; */
  margin-bottom: 120px;
}

.containerSeleccionadas {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.containerPasado, .containerPresente, .containerFuturo {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 33%;
  height: auto;
}

.cardImg {
	width: 30%;
}
p{
  font-family: 'Gochi Hand', cursive;
  /* margin-bottom: 500px; */
}


.containerPasado p, .containerPresente p, .containerFuturo p {
  background-image: url(imgs/bg_white.jpeg);
  background-size: repeat;
  color: #F66AA3;
  font-weight: bolder;
  border-radius: 20px;
  padding: 5px 5px;
  margin: 5px;
  width: 90%;
}

.containerPasado h2, .containerPresente h2, .containerFuturo h2 {
  background-image: url(imgs/bg_sakuras.png);
  background-size: cover;
  color: #F66AA3;
  border-radius: 20px;
  padding: 10px 25px;
  margin: 5px;
}


p, h2 {
  text-align: center;
}
</style>
