import { defineStore } from "pinia";
import Post from "../controllers/Post";
import Comment from "../controllers/Comment";

export const usePostStore = defineStore("post", {
	state: () => {
		return {
			posts: {},
		};
	},

	actions: {
		async LoadPosts() {
			const posts = await Post.getPosts();
			posts.forEach(async (post) => {
				const comments = await Comment.getComments(post.id);
				post.comments = comments;
			});

			this.posts = posts;
		},

		countComments(index) {
			return [...this.posts][index]?.comments?.length;
		},
	},
});
