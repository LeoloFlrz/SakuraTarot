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
        <v-img height="80" src="/imgs/Site-logo_sakura.webp" />
    </div>
    <div class="g-deck">
        <v-btn class="overcard" variant="plain" @click=tirada()>Nueva tirada</v-btn>
        <!-- <p>{{reparto}}</p> -->
    </div>
</template>

<style>
.logo{
    display: flex;
    align-items: center;
}
.g-deck{
    margin-top: 2rem;
    /* z-index: 2; */
    }

.v-btn__content{
    color:white;
    font-weight: bolder;
}


</style>