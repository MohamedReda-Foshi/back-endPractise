import express from "express";
import 'dotenv/config';
import task from './router/task.js';
import {connection} from "./config/database.js"

// Middleware to parse JSON requests
const app = express();
connection();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
});


app.use('/tasks',task);
export default app;