import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "@/views/Home.vue"
import PostDetails from "@/views/PostDetails.vue";
import PersonalBlog from "@/views/PersonalBlog.vue";

const routes : Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },

    {
        path: '/post/:index',
        name: 'PostDetails',
        component: PostDetails
    },

    {
        path: '/blog',
        name: 'PersonalBlog',
        component: PersonalBlog
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;