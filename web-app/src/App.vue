<template>
    <div id="app" class="container-fluid">
        <nav class="navbar navbar-light bg-light">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="Login" v-if="!isLoggedIn"
                >Login</router-link
            >
            <a
                href="javascript:void(0);"
                class="nav-link"
                v-if="isLoggedIn"
                v-on:click="logout"
                >Log out</a
            >
        </nav>
        <router-view class="container" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            isLoggedIn: false,
        };
    },
    methods: {
        checkLoggedIn() {
            const jwt = localStorage.getItem("jwt");
            this.isLoggedIn = !!jwt;
        },
        logout() {
            localStorage.removeItem("jwt");
            this.checkLoggedIn();
        },
    },
    created() {
        this.checkLoggedIn();
    },
    watch: {
        $route() {
            this.checkLoggedIn();
        },
    },
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
</style>
