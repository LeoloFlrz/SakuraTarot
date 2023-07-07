
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
    background-image:url(imgs/sakuraBg.jpeg);
    background-size:repeat;
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 3vh 0;
    text-align: center;
    position: fixed;
    bottom: 0;
    font-family: 'Shrikhand', cursive;
    /* 'Gochi Hand', cursive; */
    margin-top: 50vh;
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
