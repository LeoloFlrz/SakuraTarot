<script setup>
import {ref} from 'vue';
let emit = defineEmits(['response']);
let reparto = ref(false);

function tirada(){
    reparto.value = !reparto.value;
    emit('response', reparto.value)
}
</script>

<template>
    <div class="logo">
        <v-img height="13vmin" src="/imgs/Site-logo_sakura.webp" />
    </div>
    <div class="g-deck">
        <v-btn class="overcard" variant="plain" @click=tirada()>Nueva tirada</v-btn>
        <!-- <p>{{reparto}}</p> -->
    </div>
</template>
