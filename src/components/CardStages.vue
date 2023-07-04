
<script setup>
import { ref, onUpdated } from 'vue';

    defineProps({
        contador: {
            type: String
        }
    })

    

   
    const etapa = ref();
    const contadorEtapas = ref(0);



    const cambiarEtapa = onUpdated(() => {
        try {
            if (contadorEtapas.value == 1) {
                etapa.value = "pasado"
            } if (contadorEtapas.value == 2) {
                etapa.value = "presente"
            } if (contadorEtapas.value == 3) {
                etapa.value = "futuro"
            } if(contadorEtapas.value == 4 || contadorEtapas.value == 0) {
                etapa.value = ""
                contadorEtapas.value = 0
            }
        } catch (error) {
            console.log(error)
        }
        return etapa.value
    })
    
    
    
    // try {
    //         if (contadorEtapas.value == 1) {
    //             etapa.value = "pasado"
    //         } if (contadorEtapas.value == 2) {
    //             etapa.value = "presente"
    //         } if (contadorEtapas.value == 3) {
    //             etapa.value = "futuro"
    //         } if(contadorEtapas.value == 4 || contadorEtapas.value == 0) {
    //             etapa.value = ""
    //             contadorEtapas.value = 0
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     return etapa.value

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

