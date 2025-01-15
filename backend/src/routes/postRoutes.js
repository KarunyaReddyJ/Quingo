
import express from 'express'
import { createPost,readPosts,deletePost,likePost } from '../controllers/postController.js'
const router=express.Router()

router.route('/')
.get(readPosts)
.post(createPost)

router.route('/like/:id')
.put(likePost)

router.route('/delete/:id')
.delete(deletePost)
export default router