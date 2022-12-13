import { defineStore } from "pinia";
import Post from "../controllers/Post";

export const usePostStore = defineStore("post", {
	state: () => {
		return {
			posts: {},
		};
	},
	actions: {
		async LoadPosts() {
			const posts = await Post.getPosts();
			this.posts = posts;
		},
	},
});
