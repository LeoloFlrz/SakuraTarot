
<template>
    <footer>  
        <div class="bg-footer">
            <p>&copy; Sakura CardCaptor  {{ currentYear }}</p>
        </div>
    </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Shrikhand&display=swap');

footer{
    background-color: rgba(255, 255, 255, 0.7);
    color:#F66AA3;
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
    margin-top: 120vh;
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
