
<template>
    <footer>  
        <div class="bg-footer">
            <p>&copy; Sakura CardCaptor  {{ currentYear }}</p>
        <!-- <img src="imgs/Site-logo_sakura.webp" /> -->
        </div>
    </footer>
</template>

<style>

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
