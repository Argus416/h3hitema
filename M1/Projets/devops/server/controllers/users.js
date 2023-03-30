const User = require("../services/User");
const { faker } = require("@faker-js/faker");

exports.getUsers = async(req, res) => {
    try {
        const getAllUsers = await User.getUsers();
        res.send(getAllUsers);
    } catch (err) {
        console.error(err);
        res.send("Unable to get users from the User controller");
    }
};

exports.getUser = async(req, res) => {
    try {
        const { userId } = req.params;
        const getUser = await User.getUser(userId);
        res.send(getUser);
    } catch (err) {
        console.error(err);
        res.send("Unable to get user from the User controller");
    }
};

exports.getUserByEmail = async (req, res) => {
	try {
		const { email } = req.params;
		const getUser = await User.getUserByEmail(email);
		res.send(getUser);
	} catch (err) {
		console.error(err);
		res.send("Unable to get user from the User controller");
	}
};


exports.getUserLogin = async(req, res) => {
    try {
        const getUserLogin = await User.getUserLogin(req.body);
        res.send(getUserLogin);
    } catch (err) {
        console.error(err);
        res.send("Unable to get user from the User controller");
    }
};

exports.createUser = async(req, res) => {
    try {
        const data = {
            ...req.body,
            created_at: new Date(),
        };

        const createUser = await User.createUser(data);
        console.log(createUser, "createUser");

        res.send("postUser");
    } catch (err) {
        console.error(err);
        res.send("Unable to get user from the User controller");
    }
};

exports.updateUser = async(req, res) => {
    try {
        const { userId } = req.params;

        const data = {
            ...req.body,
            updated_at: new Date(),
        };

        const updateUser = await User.updateUser(userId, data);
        console.log(updateUser, "updateUser");

        res.send("updateUser");
    } catch (err) {
        console.error(err);
        res.send("Unable to update user from the User controller");
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const { userId } = req.params;

        const deleteUser = await User.deleteUser(userId);
        console.log(deleteUser, "deleteUser");

        res.send("deleteUser");
    } catch (err) {
        console.error(err);
        res.send("Unable to delete user from the User controller");
    }
};