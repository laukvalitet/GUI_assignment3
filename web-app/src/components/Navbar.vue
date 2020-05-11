<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <router-link class="navbar-brand" to="/">ModelTron2000</router-link>
                <router-link class="nav-link" to="/">Home</router-link>
                <router-link class="nav-link" to="/ModelAdd">Model(Add)</router-link>
                <router-link class="nav-link" to="/ManagerAdd">Manager(Add)</router-link>
            </ul>
            <ul class="nav navbar-nav">
                <router-link class="nav-link" to="Login" v-if="!isLoggedIn">Login</router-link>
                <a
                    href="javascript:void(0);"
                    class="nav-link"
                    v-if="isLoggedIn"
                    v-on:click="logout"
                >Log out</a>
            </ul>
        </div>
    </nav>
</template>
<script>
import router from "@/router";
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
            router.push({ name: "Login" });
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
