import Home from "./pages/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import Basket from "./pages/Basket.vue";
import Products from "./pages/Products.vue";
import Signup from "./pages/Signup.vue";

const routes = [
    { path: "/", component : Home },
    { path: "/basket", component : Basket },
    { path: "/products", component : Products },
    { path: "/login", component : Login },
    { path: "/signup", component : Signup },
    ]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router