<template>
    <div class="App">
        <Navigation />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue"
export default {
    name: "App",
    components: {
        Navigation,
        Footer
    },
};
</script>

<style lang="scss">

* {
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
}

.App {
  display: grid;
  grid-template-rows: 7%;
  gap: 1rem;
  min-height: 100vh;
  height: 100%;
  background: rgb(130, 129, 129);
  background: linear-gradient(175deg, #FFF 0%, #FFF 25%, rgba(0,212,255,0.70) 100%);
}

img {
  border: 2px solid;
  border-radius: 15%;
}

</style>