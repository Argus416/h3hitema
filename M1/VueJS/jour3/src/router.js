import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Accueil from "./pages/Accueil.vue";
import Contact from "./pages/Contact.vue";
import Blog from "./pages/Blog.vue";
import Article from "./pages/Article.vue";

const routes = [
	{ path: "/", component: Accueil, name: "accueil" },
	{ path: "/contact", component: Contact, name: "contact" },
	{ path: "/blog", component: Blog, name: "blog" },
	{ path: "/article/:articleId", component: Article, name: "article" },
];

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory("/"),
	routes, // short for `routes: routes`
});

export default router;
