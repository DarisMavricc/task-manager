import Task from "../models/taskModel.js";

export const addTask = async(req,res) => {
    const {email,name,bio,date,important,completed} = req.body;
    if(email && name && bio && date && important && completed){
        console.log(email,date,name,bio,important,completed);
        const task = await Task.create({
            email,
            name,
            bio,
            date,
            important,
            completed,
        })
        if(task){
            res.status(200).json('Beton');
        } else {
            res.status(401).json('Ne valja');
        }
    }
} 

export const deleteTask = (req,res) => {
    
} 

export const getTasks = async(req,res) => {
    const {email} = req.body;
    const tasks = await Task.find({email});
    res.status(200).json(tasks);
} 