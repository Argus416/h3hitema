import {createApp} from "vue";
import "./style/style.scss";
import "element-plus/dist/index.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import { fr } from "@formkit/i18n";

const app = createApp(App);
const pinia = createPinia();

app.use(ElementPlus);
app.use(router);
app.use(pinia);

app.use(
	plugin,
	defaultConfig({
		locales: { fr },
		locale: "fr",
		theme: "genesis",
	})
);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount("#app");
