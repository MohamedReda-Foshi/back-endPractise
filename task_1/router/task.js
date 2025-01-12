import { Router } from "express";

const router = Router();

const Tasks = [
    {
        id: 1,
        name: "Task 1",
        status: "pending",
        description: "This is Task 1"
    },
    {
        id: 2,
        name: "Task 2",
        status: "pending",
        description: "This is Task 2"
    }
];

// Get all tasks
router.get("/getdata", (req, res) => {
    try {
        res.status(200).json(Tasks);
    } catch (err) {
        res.status(500).json({ message: "Error getting tasks" });
    }
});

// Create a new task
router.post("/create", (req, res) => {
    try {
        const { name, description } = req.body;
        
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }

        const newTask = {
            id: Tasks.length + 1,
            name,
            description,
            status: "pending"
        };
        
        Tasks.push(newTask);
        res.status(201).json({ message: "Task created", task: newTask });
    } catch (err) {
        res.status(400).json({ message: "Error creating task" });
    }
});

// Update a task
router.put("/update/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const taskIndex = Tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            return res.status(404).json({ message: "Task not found" });
        }

        Tasks[taskIndex] = {
            ...Tasks[taskIndex],
            ...req.body,
            id // Preserve the original id
        };

        res.status(200).json({ 
            message: "Task updated",
            task: Tasks[taskIndex]
        });
    } catch (err) {
        res.status(400).json({ message: "Error updating task" });
    }
});

// Delete a task
router.delete("/delete/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const taskIndex = Tasks.findIndex(task => task.id === id);

        if (taskIndex === -1) {
            return res.status(404).json({ message: "Task not found" });
        }

        Tasks.splice(taskIndex, 1);
        res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        res.status(400).json({ message: "Error deleting task" });
    }
});

export default router;
