<template>
    <nav class="navbar navbar-light bg-light fixed-top">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="Register">Register</router-link>
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
</style>
