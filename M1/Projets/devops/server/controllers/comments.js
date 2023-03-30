const Comment = require("../services/Comment");
const { faker } = require("@faker-js/faker");

exports.getComments = async (req, res) => {
	try {
		const { postId } = req.params;
		const getAllComments = await Comment.getComments(postId);
		res.send(getAllComments);
	} catch (err) {
		console.error(err);
		res.send("Unable to get comments from the Comment controller");
	}
};

exports.getComment = async (req, res) => {
	try {
		const { userId, postId } = req.params;
		const getComment = await Comment.getComment(userId, postId);
		res.send(getComment);
	} catch (err) {
		console.error(err);
		res.send("Unable to get comment from the Comment controller");
	}
};

exports.createComment = async (req, res) => {
	try {
		const data = {
			...req.body,
			created_at: new Date(),
		};

		const createComment = await Comment.createComment(data);

		res.send(createComment);
	} catch (err) {
		console.error(err);
		res.send("Unable to add comment from the Comment controller");
	}
};

exports.updateComment = async (req, res) => {
	try {
		const { commentId } = req.params;

		const data = {
			...req.body,
			updated_at: new Date(),
		};

		const updateComment = await Comment.updateComment(commentId, data);

		res.send("OK");
	} catch (err) {
		console.error(err);
		res.send("Unable to update comment from the Comment controller");
	}
};

exports.deleteComment = async (req, res) => {
	try {
		const { commentId } = req.params;

		const deleteComment = await Comment.deleteComment(commentId);
		console.log(deleteComment, "deleteComment");

		res.send("OK");
	} catch (err) {
		console.error(err);
		res.send("Unable to delete comment from the Comment controller");
	}
};
