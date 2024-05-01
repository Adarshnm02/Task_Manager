const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;
const taskService = require('./services/taskService');

app.use(cors());
app.use(express.json());


app.get('/tasks', async (req, res) => {
    const tasks = await taskService.getAllTasks()
    res.json(tasks);
})

app.get('/tasks/:id', async (req, res) => {
    const task = await taskService.getTaskById(req.params.id);
    res.json(task)
})

app.post('/tasks', async (req, res) => {
    const task = await taskService.createTask(req.body);
    res.json(task)
})

app.put('/task/:id', async (req, res) => {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.json(task)
})

app.delete('/tasks/:id', async (req, res) => {
    const task = await taskService.deleteTask(req.params.id);
    res.json(task);
})


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})