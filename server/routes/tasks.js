import Task from "../models/taskModel.js";

export const addTask = async(req,res) => {
    const {email,name,bio,date,important,completed} = req.body;
    console.log(email,name,bio,date,important,completed);
    if(email && name && bio && date){
        const task = await Task.create({
            email: email,
            name: name,
            bio: bio,
            date: date,
            important: important,
            completed: completed,
        })
        if(task){
            return res.status(200).json('Task added!');
        } else {
            return res.status(400).json('Error');
        }
    }else {
        return res.status(400).json('You should fill all fields!');
    }
} 

export const updateTask = async(req,res) => {

    const {id} = req.body;
    if(id) {
        const task = await Task.findById(id);
        if(task){
            const filter = { _id: id };
            const update = {
                completed: !task.completed
            }
            const doc = await Task.findOneAndUpdate(filter,update);
            return res.status(200).json('Updated');
        } else {
            return res.status(400).json('Task not found!');
        }
    }else {
        return res.status(400).json('You should send a id of task!');
    }
    
    
} 


export const deleteTask = async(req,res) => {

    const {id} = req.params;
    const result = await Task.findByIdAndDelete(id);
    if(result) {
        return res.status(200).json('Deleted');
    }else {
        return res.status(400).json('Error');
    }
    
    
} 

export const getTasks = async(req,res) => {
    const email = req.query.email;
    const tasks = await Task.find({email});
    return res.status(200).json(tasks);
} 