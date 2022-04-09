
const User = require("../models/users.models")
// const jwt = require("jsonwebtoken");
// const bcrypt = require('bcrypt');
// const validator = require('validator');

exports.getallusers = async (req,res,next)=>{
   
    try {
       
        const users=await User.findAll();
        res.status(200).json({users})    
    } catch (error) {
        console,log(error)
        next(error)
    }
}


exports.creatusers = async (req,res,next)=>{
    try {
        let{name,title}=req.body;
        let user=new User(name,title);
        user=await user.save();
        res.status(200).json({massage:'user created'})    
    } catch (error) {
        console,log(error)
        next(error)
    }
}

exports.getuser = async (req,res,next)=>{
   
    try {
       let userID=req.params.id
        let[ user,_]=await User.findUserById(userID);
        res.status(200).json({user:user})    
    } catch (error) {
        console,log(error)
        next(error)
    }
}


exports.ubdateById = async (req,res,next)=>{
   
    try {
      
        let userID=req.params.id
        let{name,title}=req.body;
        let user=new User(name,title);
        user=await user.updateUserById(userID);
        res.status(200).json({massage:'user updated'})
    } catch (error) {
        console,log(error)
        next(error)
    }
}

exports.deleteById = async (req,res,next)=>{
   
    try {
      
        let userID=req.params.id
      
        const user=await User.deleteUserById(userID);
        const users=await User.findAll();
        res.status(200).json({users})
    } catch (error) {
        console,log(error)
        next(error)
    }
}