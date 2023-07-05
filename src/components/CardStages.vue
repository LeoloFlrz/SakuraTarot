
<script setup>
import { ref } from 'vue';

    defineProps({
        contador: {
            type: String
        }
    })

    
    const etapa = ref('');
    const contadorEtapas = ref(0);

    const cambiarEtapa = () => {
    if (contadorEtapas.value === 0) {
      etapa.value = 'pasado';
    } else if (contadorEtapas.value === 1) {
      etapa.value = 'presente';
    } else if (contadorEtapas.value === 2) {
      etapa.value = 'futuro';
    } else {
      etapa.value = 'pasado';
      contadorEtapas.value = 0;
    }
  };
    

</script>

<template>
    <div class="containerEtapa">
        <h2>Conoce tu {{ etapa }}</h2>
    <v-btn @click="cambiarEtapa(), contadorEtapas++">
        {{ contadorEtapas }}
    </v-btn>
    </div>
    
</template>

<style>
    .containerEtapa {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
</style>

