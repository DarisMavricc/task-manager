import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const login = (req,res) => {
    const {email,password} = req.body;
    if(email,password) {
        console.log(email,password);
        res.status(200).json('GOOD');
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
            res.cookie("accessToken",token).status(200).json('User created');
        } else {
            res.status(401).json('Error');
        }
    } else {
        res.status(401).json('All fields are mandatory');
    }
}