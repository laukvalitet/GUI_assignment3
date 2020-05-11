<template>
    <div id="app" class="container-fluid w-100 h-100">
        <router-view class="container" />
        <div class="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">ModelPage</a>
                <ul class="nav navbar-nav mr-2">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item mr-2">
                        <router-link class="nav-link" to="/Register">Register</router-link>
                    </li>
                    <li class="nav-item" v-if="!isLoggedIn">
                        <router-link class="nav-link" to="/Login">Login</router-link>
                    </li>
                    <li class="nav-item" v-if="isLoggedIn">
                        <a
                            type="button"
                            class="nav-link"
                            v-on:click="logout"
                            v-if="!isLoggedIn"
                        >Log Out</a>
                    </li>
                </ul>
            </div>
        </div>
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
.bg-custom {
    background-color: #34495e !important;
}
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
