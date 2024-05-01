const { response } = require('express');
const Task = require('../models/task');
const API_URL = 'http://localhost:3000';

const getAllTasks = async () => {
    const response = await fetch(`${API_URL}/tasks`);
    if(!response.ok){
        throw new Error ('Faild to fetch tasks');
    }
    return response.json();
}

const getTaskById = async (id) => {
    const response = await fetch(`${API_URL}/tasks/${id}`);
    if(!response.ok){
        throw new Error('Faild to fetch task');
    }
    return response.json();
}

const createTask = async (task) => {
    const response = await fetch(`${API_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    if(!response.ok){
        throw new Error('Failed to create task');
    }
    return response.json();
};

const updateTask = async (id, task) => {
   const response = await fetch(`${API_URL}/tasks/${id}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
   });
   if(!response.ok){
    throw new Error('Faild to update task');
   }
   return response.json();
}

const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/tasks/${id}`,{
        method: 'DELETE',
    });
    if(!response.ok){
        throw new Error('Faild to delete task');
    }
}


module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
}