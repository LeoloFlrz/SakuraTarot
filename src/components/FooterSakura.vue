
<template>
    <footer>  
        <div class="bg-footer">Sakura CardCaptor  {{ currentYear }}
        <!-- <img src="imgs/Site-logo_sakura.webp" /> -->
        </div>
    </footer>
</template>

<style>

footer{
    position: sticky;
    background-image:url(imgs/bg_sakuras.png);
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
