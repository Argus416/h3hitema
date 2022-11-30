import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Accueil from "./pages/Accueil.vue";
import Contact from "./pages/Contact.vue";
import Blog from "./pages/Blog.vue";
import Article from "./pages/Article.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import Err404 from "./pages/errors/Err404.vue";

const routes = [
	{ path: "/", component: Accueil, name: "accueil" },
	{ path: "/contact", component: Contact, name: "contact" },
	{ path: "/blog", component: Blog, name: "blog" },
    { path: "/article/:articleId", component: Article, name: "article" },
    { path: "/login", component: Login, name: "login" },
    { path: "/signup", component: Signup, name: "signup" },
    { path: "/:pathMatch(.*)*", component: Err404, name: "err404" },
];

const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHistory("/"),
	routes, // short for `routes: routes`
});

export default router;
