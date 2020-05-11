<template>
    <div id="app" class="container-fluid w-100 h-100">
        <router-view class="container" />
        <globalNavbar />
    </div>
</template>

<script>
import globalNavbar from "./components/Navbar.vue";

export default {
    components: {
        globalNavbar
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

html,
body {
    height: 100%;
    padding: 0;
    margin: 0;
    background-color: #ecf0f1 !important;
}
</style>
