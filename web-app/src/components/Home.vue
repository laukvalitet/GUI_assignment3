<template>
    <!-- Needs tot check for role but otherwise neato -->
    <home-manager v-if="userRole === 'Manager'"></home-manager>
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
        }
    },
};
</script>
