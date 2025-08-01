import express from 'express';
const router=express.Router()
import { acceptRequest, removeFromFriend, sendRequest,seeRequest } from '../controllers/friendController.js';

router.route('/request/:id')
.get(seeRequest)
router.route('/request')
.post(sendRequest)
.put(acceptRequest)


router.route('/')
.delete(removeFromFriend)

export default router