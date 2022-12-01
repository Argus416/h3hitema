const Comment = require("../services/Comment");
const { faker } = require("@faker-js/faker");

exports.getComments = async(req, res) => {
    try {
        const {userId} = req.params
        const getAllComments = await Comment.getComments(userId);
        res.send(getAllComments);
    } catch (err) {
        console.error(err);
        res.send("Unable to get users from the Comment controller");
    }
};

exports.getComment = async(req, res) => {
    try {
        const { userId ,postId } = req.params;
        const getComment = await Comment.getComment(userId,postId);
        res.send(getComment);
    } catch (err) {
        console.error(err);
        res.send("Unable to get user from the Comment controller");
    }
};


exports.createComment = async(req, res) => {
    try {
        const data = {
            ...req.body,
            created_at: new Date(),
        };

        const createComment = await Comment.createComment(data);
        console.log(createComment, "createComment");

        res.send("postComment");
    } catch (err) {
        console.error(err);
        res.send("Unable to add post from the Comment controller");
    }
};

exports.updateComment = async(req, res) => {
    try {
        const { commentId } = req.params;

        const data = {
            ...req.body,
            updated_at: new Date(),
        };

        const updateComment = await Comment.updateComment(commentId, data);
        console.log("updateComment");

        res.send("updateComment");
    } catch (err) {
        console.error(err);
        res.send("Unable to update post from the Comment controller");
    }
};

exports.deleteComment = async(req, res) => {
    try {
        const { commentId } = req.params;

        const deleteComment = await Comment.deleteComment(commentId);
        console.log(deleteComment, "deleteComment");

        res.send("deleteComment");
    } catch (err) {
        console.error(err);
        res.send("Unable to delete user from the Comment controller");
    }
};
