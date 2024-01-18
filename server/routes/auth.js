import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const login = async(req,res) => {
    const {email,password} = req.body;
    if(email && password) {
        const user = await User.findOne({email});
        if(user){
            bcrypt.compare(password,user.password, function(err,exist) {
                if(exist){
                    const data = {
                        id: user._id,
                        email: user.email,
                    }
                    const token =  jwt.sign(data,'secret',{expiresIn: '1hr'});
                    res.cookie("accessToken",token);
                    res.status(200).json(data);
                } else {
                    res.status(401).json('Email or Password is Incorrect!');
                }
            })
        }else {
            res.status(404).json('User does not exist!');
        }
    } else {
        res.status(400).json('All fields are mandatory');
    }
}

export const register = async(req,res) => {
    const {first_name,last_name,email,password} = req.body;
    if(first_name && last_name && email && password) {
        const newpassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            first_name,
            last_name,
            email,
            password: newpassword
        }) 
        if(user){
            const data = {
                id: user._id,
                email: user.email,
            }
            const token =  jwt.sign(data,'secret',{expiresIn: '1hr'});
            console.log('New User Created');
            res.cookie("accessToken",token).status(201).json(data);
        } else {
            res.status(400).json('Error');
        }
    } else {
        res.status(400).json('All fields are mandatory');
    }
}

export const getUser = async(req,res) => {
    const {email} = req.body;
    const user = await User.findOne({email});
    if(user){
        res.status(200).json(user);
    } else {
        res.status(400).json('User does not exist!');
    }
}