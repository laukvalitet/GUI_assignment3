<template>
    <div id="app" class="container-fluid">
        <nav class="navbar navbar-light bg-light">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="Login">Login</router-link>
        </nav>
        <router-view class="container" />
    </div>
</template>

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
