import express from 'express'
import { viewProfile,searchProfile } from '../controllers/userController.js'
import User from '../models/User.js'
const router=express.Router()
router.route('/').get(async(req,res)=>{
    try {
        const users=await User.find({})
        res.json(users)
    } catch (error) {
        
    }
})
router.route('/profile/search/:name')
.get(searchProfile)

router.route('/profile/id/:id')
.get(viewProfile)

export default router