import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";

const routes = [
	{ path: "/", name: "home", component: Home },
	{ path: "/login", name: "login", component: Login },
	{ path: "/signup", name: "signup", component: Signup },
];

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory(),
	routes, // short for `routes: routes`
});

export default router;
