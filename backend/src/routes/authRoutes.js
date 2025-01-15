import express from 'express';
const router=express.Router()
import { userLogin,userSignUp } from '../controllers/authController.js'

router.route('/login')
.post(userLogin)

router.route('/signup')
.post(userSignUp)

export default router