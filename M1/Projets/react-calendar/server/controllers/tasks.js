const Task = require("../services/Task");
const { faker } = require("@faker-js/faker");

exports.getTasks = async(req, res) => {
    try {
        const getAllTasks = await Task.getTasks();
        res.send(getAllTasks);
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get tasks from the User controller");
    }
};

exports.getTask = async(req, res) => {
    try {
        const { taskId } = req.params;
        const getTask = await Task.getTask(taskId);
        res.send(getTask);
    } catch (err) {
        console.error(err);
        res.send("Unalbe to get task from the User controller");
    }
};

exports.createTask = async(req, res) => {
    try {
        const data = {
            title: faker.lorem.sentence(5),
            description: faker.lorem.paragraph(3),
            userId: 1,
            created_at: new Date(),
        };

        const createTasks = await Task.createTask(data);
        console.log(createTasks, "createTasks");

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
            updated_at: new Date(),
        };

        const updateUser = await User.updateUser(userId, data);
        console.log(updateUser, "updateUser");

        res.send("updateUser");
    } catch (err) {
        console.error(err);
        res.send("Unalbe to update user from the User controller");
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
        res.send("Unalbe to delete user from the User controller");
    }
};