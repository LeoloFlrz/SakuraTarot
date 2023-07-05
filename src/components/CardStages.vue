
<script setup>
import { ref } from 'vue';

    defineProps({
        contador: {
            type: String
        }
    })

    
    const etapa = ref('');
    const contadorEtapas = ref(0);
    const pasadoFlag = ref(false)
    const presenteFlag = ref(false)
    const futuroFlag = ref(false)

    const cambiarEtapa = () => {
    if (contadorEtapas.value === 0) {
      etapa.value = 'pasado';
      pasadoFlag.value = true;
    } else if (contadorEtapas.value === 1) {
      etapa.value = 'presente';
      pasadoFlag.value = false;
      presenteFlag.value = true;
    } else if (contadorEtapas.value === 2) {
      etapa.value = 'futuro';
      presenteFlag.value = false;
      futuroFlag.value = true;
    } else {
      etapa.value = 'pasado';
      contadorEtapas.value = 0;
      presenteFlag.value = false;
      futuroFlag.value = false;
      pasadoFlag.value = true;
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

