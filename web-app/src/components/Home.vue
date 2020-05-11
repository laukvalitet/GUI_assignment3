<template>
    <!-- Needs tot check for role but otherwise neato -->
    <div class="container">
        <home-manager v-if="userRole === 'Manager'"></home-manager>

        <div class="col-4" v-if="userRole === null">
            <h1>Home</h1>
            <p>Please login</p>
        </div>
    </div>
</template>

<script>
import HomeManager from "@/components/HomeManager";
import decode from "@/shared/decode.js";
export default {
    data() {
        return {
            userRole: null,
        };
    },
    components: {
        HomeManager,
    },
    created() {
        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) {
            this.userRole = decode(jwt).role;
        } else {
            this.userRole = null;
        }
    },
};
</script>
