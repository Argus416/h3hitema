import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Accueil from "./pages/Accueil.vue";
import Contact from "./pages/Contact.vue";

const routes = [
	{ path: "/", component: Accueil },
	{ path: "/contact", component: Contact },
];

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory("/"),
	routes, // short for `routes: routes`
});

export default router;
