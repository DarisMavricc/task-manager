import mongoose from "mongoose";


const taskSchema = mongoose.Schema({
    email: {
        type:String,
        required: [true]
    },
    name: {
        type:String,
        required: [true, "Please add the task name"],
    },
    bio: {
        type:String,
        required: [true, "Please add the task bio"],
    },
    date: {
        type:String,
        required: [true, "Please add the date"],
    },
    important: {
        type:Boolean,
        default:false,
    },
    completed: {
        type:Boolean,
        default:false,
    }
},
    {
        timestamps: true,
    }
);

export default mongoose.model('Task',taskSchema);