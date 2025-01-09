import { Router } from "express";


const router = Router();

router.get("/add",(req,res)=>{
    res.status(200).send("Add Task");
});
router.post("/add",(req,res)=>{
    res.status(201).send("Task Created");
});

router.put("/update",(req,res)=>{
    res.status(200).send("Update Task");
});

router.delete("/delete",(req,res)=>{
    res.status(200).send("Delete Task");
});

export default router;
