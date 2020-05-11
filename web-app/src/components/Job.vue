<template>
    <div class="container">
        <job-manager v-if="userRole === 'Manager'"></job-manager>
    </div>
</template>

<script>
import JobManager from "@/components/JobManager";
import decode from "@/shared/decode.js";
export default {
    data() {
        return {
            userRole: null,
        };
    },
    components: {
        JobManager,
    },
    created() {
        const jwt = localStorage.getItem("jwt");
        if (jwt !== null) {
            this.userRole = decode(jwt).role;
        }
    },
};
</script>
