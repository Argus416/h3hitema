const Post = require("../services/Post");
const Comment = require("../services/Comment");
const Like = require("../services/Like");
const { faker } = require("@faker-js/faker");

exports.getPosts = async (req, res) => {
	try {
		let getAllPosts = await Post.getPosts();
		getAllPosts = await Promise.all(
			getAllPosts.map(async (post) => {
				const comments = await Comment.getComments(post.id);
				const likes = await Like.getLikes(post.id);
				post.comments = comments;
				post.likes = likes;
				return post;
			})
		);

		res.send(await getAllPosts);
	} catch (err) {
		console.error(err);
		res.send("Unable to get users from the Post controller");
	}
};

exports.getPost = async(req, res) => {
    try {
        const { postId } = req.params;
        const getPost = await Post.getPost(postId);
        res.send(getPost);
    } catch (err) {
        console.error(err);
        res.send("Unable to get user from the Post controller");
    }
};


exports.createPost = async(req, res) => {
    try {
        const data = {
            ...req.body,
            created_at: new Date(),
        };

        const createPost = await Post.createPost(data);
        console.log(createPost, "createPost");

        res.send("postPost");
    } catch (err) {
        console.error(err);
        res.send("Unable to add post from the Post controller");
    }
};

exports.updatePost = async(req, res) => {
    try {
        const { postId } = req.params;

        const data = {
            ...req.body,
            updated_at: new Date(),
        };

        const updatePost = await Post.updatePost(postId, data);
        console.log("updatePost");

        res.send("updatePost");
    } catch (err) {
        console.error(err);
        res.send("Unable to update post from the Post controller");
    }
};

exports.deletePost = async(req, res) => {
    try {
        const { postId } = req.params;

        const deletePost = await Post.deletePost(postId);
        console.log(deletePost, "deletePost");

        res.send("deletePost");
    } catch (err) {
        console.error(err);
        res.send("Unable to delete user from the Post controller");
    }
};
