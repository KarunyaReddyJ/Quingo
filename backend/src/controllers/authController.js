import User from "../models/User.js"
import { generateToken } from "../utils/generateToken.js"


export const userLogin=async(req,res)=>{
    try {
        const {email,password}=req.body
        console.log({email,password})
        const userFound=await User.findOne({email})
        if(!userFound){
            return res.status(404).send("User doesn't exist")
        }

        else if( !(await userFound.matchPassword(password))){
            return res.status(502).send("Incorrect Password")
        }
        const token=generateToken(userFound._id)
        res.cookie('token',token,{
            httpOnly: true,  sameSite: 'Strict',
        })
        
        res.status(200).json({
            ...userFound._doc,
            token
        })

    } catch (error) {
        console.error('cannot login ',error)
        res.status(500).send("Internal Server Error")
    }
}
export const userSignUp=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const userFound=await User.findOne({email})
        if(userFound){
            return res.status(501).send("User already exist")
        }
        const userCreated=new User({name,email,password})
        await userCreated.save()
        const token=generateToken(userCreated._id)
        res.cookie('token',token,{
            httpOnly: true,  sameSite: 'Strict',
        })
        res.status(200).json({
            name,
            role:userCreated.role
        })

    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
}