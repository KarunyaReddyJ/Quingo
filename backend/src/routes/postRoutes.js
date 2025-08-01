
import express from 'express'
import { createPost,readPosts,deletePost,likePost,getPostComments,addComment } from '../controllers/postController.js'
const router=express.Router()

router.route('/')
.get(readPosts)
.post(createPost)


router.route('/like/:id')
.put(likePost)

router.route('/comment/:id')
.get(getPostComments)
.post(addComment)

router.route('/delete/:id')
.delete(deletePost)
export default router