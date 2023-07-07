
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
    position: sticky;
    background-image:url(imgs/bg_sakuras.png);
    width: 100%;
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
