<template>
    <div class="col-lg-4 col-xl-2 col-12">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="email">
                    Email:
                </label>
                <input
                    type="text"
                    class="form-control"
                    name="email"
                    placeholder="Email address"
                    v-model="user.email"
                />
            </div>
            <div class="form-group">
                <label for="password">
                    Password:
                </label>
                <input
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    v-model="user.password"
                />
                <small class="text-danger" v-if="failed">Login failed</small>
            </div>
            <button class="btn btn-primary" type="submit">Log in</button>
        </form>
    </div>
</template>

<script>
import { post } from "@/shared/fetch.js";
import router from "@/router";
export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
            failed: false,
        };
    },

    methods: {
        handleSubmit() {
            post("api/Account/Login", this.user).then(async response => {
                if (response.status === 200) {
                    this.failed = false;
                    const responseJson = await response.json();
                    localStorage.setItem("jwt", responseJson.jwt);
                    router.push({ name: "Home" });
                } else {
                    this.handleFailedLogin();
                }
            });
        },
        handleFailedLogin() {
            this.failed = true;
        },
    },
};
</script>
