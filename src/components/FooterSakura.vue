
<template>
    <footer>  Sakura CardCaptor  {{ currentYear }}
        <img src="imgs/Site-logo_sakura.webp" />
    </footer>
</template>

<style>

footer{position: sticky;}

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
