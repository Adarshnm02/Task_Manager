const Task = require('../models/task');

const getAllTasks = async () => {
    return await Task.find({});
}

const getTaskById = async (id) => {
    return await Task.findById(id);
}

const createTask = async (task) => {
    return await Task.create(task)
}

const updateTask = async (id, task) => {
    return await Task.findByIdAndUpdate(id, task, { new: true});
}

const deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id)
}


module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}