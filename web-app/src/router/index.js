import Vue from "vue";
import VueRouter from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import Login from "@/components/Login";
import Home from "@/components/Home";
import CreateJob from "@/components/CreateJob";
import ManagerCreate from "@/components/ManagerCreate";
import ModelCreate from "@/components/ModelCreate";
import Job from "@/components/Job";

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
        path: "/ModelCreate",
        name: "ModelCreate",
        component: ModelCreate,
    },
    {
        path: "/ManagerCreate",
        name: "ManagerCreate",
        component: ManagerCreate,
    },
    {
        path: "/Job",
        name: "CreateJob",
        component: CreateJob,
    },
    {
        path: "/Job/:id",
        name: "Job",
        component: Job,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
