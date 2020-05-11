<template>
    <!-- Needs tot check for role but otherwise neato -->
    <home-manager v-if="userRole === 'Manager'"></home-manager>
    <home-model v-if="userRole === 'Model'"></home-model>

</template>

<script>
import HomeManager from "@/components/HomeManager";
import decode from "@/shared/decode.js";
import HomeModel from "@/components/HomeModel/HomeModel";
export default {
    data() {
        return {
            userRole: null,
        };
    },
    components: {
        HomeManager,
        HomeModel
    },
    created() {
        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) {
            this.userRole = decode(jwt).role;
        }
    },
};
</script>
