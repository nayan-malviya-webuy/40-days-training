import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import Home from "@/pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '',
                component: Home
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;