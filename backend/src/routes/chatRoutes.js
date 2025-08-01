import express from 'express';
const router=express.Router()


import { createChatRoom, getUserChatRooms } from '../controllers/chatController.js'
import { sendMessage, getRoomMessages } from '../controllers/messageController.js'

router.post('/create', createChatRoom);
router.get('/rooms/:userId', getUserChatRooms);
router.post('/:roomId/send', sendMessage);
router.get('/:roomId/messages', getRoomMessages);


export default router