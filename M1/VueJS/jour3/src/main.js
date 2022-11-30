import { createApp } from "vue";
import "./style/style.scss";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia"

const app = createApp(App);

app.use(router);
app.use(createPinia())

app.directive("more", (el, binding) => {
	const findModifier = (modifier = "") => {
		const result = Object.keys(binding.modifiers).includes(modifier);
		return result;
	};

	if (!Object.keys(binding.modifiers).length) {
		const text = binding.value.split(" ").slice(0, 3).join(" ");
		el.innerText = text;
	}

	if (findModifier("body")) {
		const text = binding.value.split(" ").slice(0, 10).join(" ") + "...";
		el.innerText = text;
	}
});

app.mount("#app");
