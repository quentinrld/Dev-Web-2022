<template>
    <div class="App">
        <Navigation/>
        <router-view/>
    </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
    name: "App",
    components: {
        Navigation,
    },
};
</script>

<style lang="scss">

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
}

.app {
    min-height: 100vh;
    position: relative;
    background-color: #fff;
}

.container {
    padding: 0 20px;
    max-width: 1140px;
    margin: 0 auto;
}

</style>