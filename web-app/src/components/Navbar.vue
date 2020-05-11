<template>
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
                    <a type="button" class="nav-link" v-on:click="logout" v-if="!isLoggedIn">Log Out</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style>
.bg-custom {
    background-color: #34495e !important;
}
</style>