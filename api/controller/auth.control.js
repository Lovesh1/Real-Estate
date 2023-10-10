import express from 'express';
import User from '../models/User.js'
import bcryptjs from 'bcryptjs'

import jwt from 'jsonwebtoken'


export const signup = async (req,res,next) => {
    const {username, password, email} = req.body;
    const hashpass = bcryptjs.hashSync(password,10)
    const newUser = new User({username, email, password: hashpass})
    try{
        await newUser.save();
        res.status(201).json('User Created Successfully')
    }catch(err){
       next(err)
    }
   
}

export const signin = async (req,res,next) => {
    const {username, password}  = req.body

    try{
        const validuser = await User.findOne({username})
        if(!validuser) return next(404, 'User not Found')
        const validpassword = bcryptjs.compareSync(password, validuser.password)
        if(!validpassword) return next(401, 'Wrong Credentials')
        const token = jwt.sign({id: validuser._id}, process.env.jwt_secret);
        const {password: pass, ...rest} = validuser._doc;
        res.cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(rest);
    }catch(err){
        next(err);
    }
}