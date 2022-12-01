import Home from "./pages/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import Login from "./pages/Login.vue";
import Basket from "./pages/Basket.vue";
import Products from "./pages/Products.vue";
import Signup from "./pages/Signup.vue";
import Product from "./pages/Product.vue";

const routes = [
    {path: "/", component: Home, name: "home"},
    {path: "/basket", component: Basket, name: "basket"},
    {path: "/products", component: Products, name: "products"},
    {path: "/products/:productId", component: Product, name: "product"},
    {path: "/login", component: Login, name: "login"},
    {path: "/signup", component: Signup, name: "signup"},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router