
<script setup>
import { ref } from 'vue';

    defineProps({
        contador: {
            type: String
        }
    })

    

   
    const etapa = ref();
    const contadorEtapas = ref(0);

    // onUpdated(() => {
    //     try {
    //         if(contadorEtapas.value === 0) {
    //             etapa.value = "Pasado"
    //         } else if (contadorEtapas.value === 1) {
    //             etapa.value = "Presente"
    //         } else if (contadorEtapas.value === 2) {
    //             etapa.value = "Futuro"
    //         } else {
    //             contadorEtapas.value = 0
    //             etapa.value = "Default"
    //         } 
    //     } catch (error) {
    //         console.log(error)
    //     }
    
    // })

    // try {

    //     let etapa = "";
    //     const contadorEtapas = ref();

    //         if(contadorEtapas.value == 0) {
    //             etapa = "Pasado"
    //         } else if (contadorEtapas.value == 1) {
    //             etapa = "Presente"
    //         } else if (contadorEtapas.value == 2) {
    //             etapa = "Futuro"
    //         } else {
    //             contadorEtapas.value = 0
    //             etapa = "Default"
    //         } 

    //     } catch (error) {
    //         console.log(error)
    //     }


    const cambiarEtapa = () => {
        // const etapa = ref()
        // const contadorEtapas = ref(0)

        try {
            if (contadorEtapas.value == 0) {
                etapa.value = "pasado"
            } if (contadorEtapas.value == 1) {
                etapa.value = "presente"
            } if (contadorEtapas.value == 2) {
                etapa.value = "futuro"
            } if(contadorEtapas.value == 3) {
                etapa.value = "Default"
                contadorEtapas.value = 0
            }
        } catch (error) {
            console.log(error)
        }
        return etapa.value
    }
    // let contadorPrueba = computed(() =>{
            
    //         return contadorPrueba.value
    //     })
    // onMounted(() => {
    //     try {
    //         if(contadorEtapas.value === 0) {
    //             etapa.value = "Pasado"
    //         } else if (contadorEtapas.value === 1) {
    //             etapa.value = "Presente"
    //         } else if (contadorEtapas.value === 2) {
    //             etapa.value = "Futuro"
    //         } else {
    //             contadorEtapas.value = 0
    //             etapa.value = "Default"
    //         } 
    //     } catch (error) {
    //         console.log(error)
    //     }
    // })

</script>

<template>
    <h2>Conoce tu {{ etapa }}</h2>
    <v-btn @click="cambiarEtapa(), contadorEtapas++">
        {{ contadorEtapas }}
    </v-btn>
</template>

<style>
</style>

