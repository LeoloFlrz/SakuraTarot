/** me llega la carta seleccionada? asignar carta seleccionada a etapa
correspondiente cuando se selecciona la carta para una etapa pasar a la
siguiente etapa cuando las 3 etapas tienen una carta seleccionada no tener la
opcion de seleccionar ninguna mas mostrar las 3 cartas asignadas a su etapa
mostrar significado de cada carta */

<script setup>
import { ref, onUpdated } from "vue";

const props = defineProps({
  data: {
    type: Object
  }
});

const card1 = ref();
const card1Img = ref()
const card2 = ref();
const card3 = ref();
const contador = ref(0);
const arraySeleccionadas = ref([])

onUpdated(() => {
    arraySeleccionadas.value[contador.value] = props.data
    
    // arraySeleccionadas.value[0] = "Hola"
    contador.value++

    if (arraySeleccionadas.value.length === 1) {
      card1.value = arraySeleccionadas.value[0]
      console.log(card1.value);
    } else if (arraySeleccionadas.value.legnth === 2) {
      card2.value = arraySeleccionadas.value[1]
      console.log(card2.value);
    } else if (arraySeleccionadas.value.length === 3) {
      card3.value = arraySeleccionadas.value[2]
      console.log(card3.value);
    }
    

    
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
