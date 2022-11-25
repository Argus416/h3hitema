const User = require("../services/User");
const { faker } = require("@faker-js/faker");

exports.getUsers = async(req, res) => {
    try {
        const getAllUsers = await User.getUsers();
        res.send(getAllUsers);
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get users from the User controller");
    }
};
exports.getUser = async(req, res) => {
    try {
        const { userId } = req.params;
        const getUser = await User.getUser(userId);
        res.send(getUser);
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get user from the User controller");
    }
};

exports.createUser = async(req, res) => {
    try {
        const data = {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
        };

        const getAllUsers = await User.createUser(data);
        console.log(getAllUsers, "getAllUsers");

        res.send("postUser");
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get user from the User controller");
    }
};

exports.updateUser = async(req, res) => {
    try {
        const { userId } = req.params;

        const data = {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
        };

        const updateUser = await User.updateUser(userId, data);
        console.log(updateUser, "updateUser");

        res.send("updateUser");
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get user from the User controller");
    }
};