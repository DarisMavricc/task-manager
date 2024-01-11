import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const login = async(req,res) => {
    const {email,password} = req.body;
    if(email,password) {
        const user = await User.find({email});
        if(user){
            bcrypt.compare(password,user[0].password, function(err,exist) {
                if(exist){
                    const data = {
                        email: user[0].email,
                    }
                    const token =  jwt.sign(data,'secret',{expiresIn: '1hr'});
                    res.cookie('accessToken',token).status(200).json('Logged in');
                } else {
                    res.status(401).json('Email or Password is Incorrect!');
                }
            })
        }else {
            res.status(404).json('User does not exist!');
        }
    } else {
        res.status(401).json('All fields are mandatory');
    }


     /* bcrypt.compare(password,newpassword, function(err,res) {
        if(res){
            console.log(res);
        } else {
            console.log(err);
        }
    }) */
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
            res.cookie("accessToken",token).status(201).json('User created');
        } else {
            res.status(401).json('Error');
        }
    } else {
        res.status(401).json('All fields are mandatory');
    }
}