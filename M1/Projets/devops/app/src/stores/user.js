import { defineStore } from "pinia";

let currentUserIfLoggedIn = {};

if (localStorage.getItem("user")) {
	currentUserIfLoggedIn = JSON.parse(localStorage.getItem("user"));
}

export const useUserStore = defineStore("user", {
	state: () => {
		return {
			user: currentUserIfLoggedIn,
		};
	},
	actions: {
		login(data) {
			const result = { ...data, isLoggedIn: true };
			console.log(data);
			this.user = result;
			localStorage.setItem("user", JSON.stringify(result));
		},

		logout(data) {
			this.user = {};
			localStorage.removeItem("user");
		},

		isLoggedIn() {
			if (this.user.isLoggedIn) return true;
			return false;
		},
	},
});
