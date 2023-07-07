
<template>
    <footer>  
        <div class="bg-footer">
            <p>&copy; Sakura CardCaptor  {{ currentYear }}</p>
        <!-- <img src="imgs/Site-logo_sakura.webp" /> -->
        </div>
    </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Shrikhand&display=swap');

footer{
    background-image:url(imgs/bg_sakuras.png);
    background-size:repeat;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3vh;
    text-align: center;
    position: fixed;
    bottom: 0;
    left: 0;
    font-family: 'Shrikhand', cursive;
    /* 'Gochi Hand', cursive; */
}
</style>

<script>
export default {
    data() {
        return {
        currentYear: new Date().getFullYear(),
        };
    },
};
</script>
