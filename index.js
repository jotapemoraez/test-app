"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

class Task {
    id;
    title;
    description;
    status;
    createdAt;
    updatedAt;
    constructor(id, title, description, status, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

const task1 = new Task('1', 'task', 'desc', 'completed', '2025-02-02', '2025-02-02');
const task2 = new Task('2', 'task', 'desc', 'completed', '2025-02-02', '2025-02-02');
const tasks = [task1, task2];

// Define a basic route
app.get('/tasks', (req, res) => {
    res.send(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const id = req.params['id'];
    const task = tasks.find(t => t.id === id);
    res.send(task);
});

app.post('/tasks', (req, res) => {
    const title = req.query.title;
    const desc = req.query.description;
    const task = new Task('', title, desc, '', Date.now, '');
    tasks.push(task);
    res.send(task);
});

// Start the server
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map