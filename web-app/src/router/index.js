import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import Login from "@/components/Login";
import Home from "@/components/Home";
import ManagerAdd from "@/components/ManagerAdd";
import ModelAdd from "@/components/ModelAdd";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/ModelAdd",
        name: "ModelAdd",
        component: ModelAdd,
    },
    {
        path: "/ManagerAdd",
        name: "ManagerAdd",
        component: ManagerAdd,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
