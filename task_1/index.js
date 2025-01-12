import express from "express";
import 'dotenv/config';
import task from './router/task.js';
import {connection} from "./config/database.js"

// Middleware to parse JSON requests
const app = express();

// Connect to the  database
connection(app);

app.use(express.json());

app.get("/",(req,res)=>{
    res.render("index.ejs");
});


app.use('/tasks',task);

export default app;