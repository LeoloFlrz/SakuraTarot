/** me llega la carta seleccionada? asignar carta seleccionada a etapa
correspondiente cuando se selecciona la carta para una etapa pasar a la
siguiente etapa cuando las 3 etapas tienen una carta seleccionada no tener la
opcion de seleccionar ninguna mas mostrar las 3 cartas asignadas a su etapa
mostrar significado de cada carta */

<script setup>
import { ref } from "vue";
import data from "./CardsSakura.vue";
// import cards from './CardsSakura.vue'
import cardsData from "./CardsSakura.vue";
import count from "./CardsSakura.vue";

defineProps({
  contador: {
    type: String,
  },
});

const etapa = ref("");
const contadorEtapas = ref(0);
// const cartaSeleccionada = ref('');
const pasadoFlag = ref(false);
const presenteFlag = ref(false);
const futuroFlag = ref(false);

const cambiarEtapa = () => {
  if (contadorEtapas.value === 0) {
    etapa.value = "pasado";
    pasadoFlag.value = true;
  } else if (contadorEtapas.value === 1) {
    etapa.value = "presente";
    pasadoFlag.value = false;
    presenteFlag.value = true;
  } else if (contadorEtapas.value === 2) {
    etapa.value = "futuro";
    presenteFlag.value = false;
    futuroFlag.value = true;
  } else {
    etapa.value = "pasado";
    contadorEtapas.value = 0;
    presenteFlag.value = false;
    futuroFlag.value = false;
    pasadoFlag.value = true;
  }
};

// const cambiarEtapa = (carta) => {
//     if (contadorEtapas.value === 0) {
//     etapa.value = 'pasado';
//     } else if (contadorEtapas.value === 1) {
//     etapa.value = 'presente';
//     } else if (contadorEtapas.value === 2) {
//     etapa.value = 'futuro';
//     }
//     contadorEtapas.value = (contadorEtapas.value + 1) % 3;
//     cartaSeleccionada.value = carta;
// };
//   try {
//     if (cards[0] != '' && cards[1] != '') {
//     console.log(cards[0].value || cards[1].value);
//     }
//   } catch (error) {
//     console.log(error);
//   }
</script>

<template>
  <div class="containerEtapa">
    <h2>Conoce tu destino</h2>
    <v-btn
      @click="
        cambiarEtapa(),
          contadorEtapas++,
          console.log(data.value),
          console.log(cardsData.value),
          console.log(count.value)
      "
    >
      {{ contadorEtapas }}
    </v-btn>
    <div class="containerSeleccionadas">
      <div class="containerPasado">Pasado</div>
      <div class="containerPresente">Presente</div>
      <div class="containerFuturo">Futuro</div>
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
