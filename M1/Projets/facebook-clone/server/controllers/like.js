const Like = require("../services/Like");

exports.getLikes = async (req, res) => {
	try {
		const { postId } = req.params;
		const getAllLikes = await Like.getLikes(postId);
		res.send(getAllLikes);
	} catch (err) {
		console.error(err);
		res.send("Unable to get likes from the Like controller");
	}
};

exports.getLike = async (req, res) => {
	try {
		const { userId, likeId } = req.params;
		const getLike = await Like.getLike(userId, likeId);
		res.send(getLike);
	} catch (err) {
		console.error(err);
		res.send("Unable to get like from the Like controller");
	}
};

exports.createLike = async (req, res) => {
	try {
		const data = {
			...req.body,
			created_at: new Date(),
		};

		const createLike = await Like.createLike(data);

		res.send(createLike);
	} catch (err) {
		console.error(err);
		res.send("Unable to add like from the Like controller");
	}
};

exports.updateLike = async (req, res) => {
	try {
		const { likeId } = req.params;

		const data = {
			...req.body,
			updated_at: new Date(),
		};

		const updateLike = await Like.updateLike(likeId, data);

		res.send("OK");
	} catch (err) {
		console.error(err);
		res.send("Unable to update like from the Like controller");
	}
};

exports.deleteLike = async (req, res) => {
	try {
		const { likeId } = req.params;

		const deleteLike = await Like.deleteLike(likeId);
		console.log(deleteLike, "deleteLike");

		res.send("OK");
	} catch (err) {
		console.error(err);
		res.send("Unable to delete like from the Like controller");
	}
};
