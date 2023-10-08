import { response } from 'express';
import User from '../models/User.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req,res) => {
    const {username, password, email} = req.body;
    const hashpass = bcryptjs.hashSync(password,10)
    const newUser = new User({username, email, password: hashpass})
    try{
        await newUser.save();
        res.status(201).json('User Created Successfully')
    }catch(err){
        res.status(500).json(err.message);
    }
   
}