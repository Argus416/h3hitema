const UserService = require("../services/User");
const { faker } = require("@faker-js/faker");

exports.getUsers = async(req, res) => {
    try {
        const { knex } = req.server;
        const User = new UserService(knex);
        const getAllUsers = await User.getUsers();
        res.send(getAllUsers);
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get users from the User controller");
    }
};
exports.getUser = async(req, res) => {
    try {
        const { knex } = req.server;
        const { userId } = req.body;
        const User = new UserService(knex);
        // const getUser = await User.getUser(userId);
        // res.send(getUser);
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get user from the User controller");
    }
};

exports.createUser = async(req, res) => {
    const data = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
    };

    const { knex } = req.server;
    const User = new UserService(knex);
    const getAllUsers = await User.createUser(data);
    res.send("postUser");
};