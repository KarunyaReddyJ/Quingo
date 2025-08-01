
import express from 'express'
import { getAllUserData,createPost } from '../controllers/testController.js'
const router=express.Router()

router.route('/user')
.get(getAllUserData)

router.route('/post')
.post(createPost)
export default router