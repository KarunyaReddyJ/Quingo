import Message from '../models/Message.js';
import ChatRoom from '../models/Room.js';
import asyncHandler from '../middlewares/asyncHandler.js';

// Send message to a room
export const sendMessage = asyncHandler(async (req, res) => {
  const { roomId } = req.params;
  const { sender, content, type = 'text' } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Message content is required' });
  }

  const message = await Message.create({
    sender,
    content,
    room: roomId,
    type
  });

  await ChatRoom.findByIdAndUpdate(roomId, { lastMessage: message._id });

  res.status(201).json(message);
});

// Fetch messages for a room
export const getRoomMessages = asyncHandler(async (req, res) => {
 
  try {
    const { roomId } = req.params;

    const messages = await Message.find({ room: roomId })
      .populate('sender', '_id name email')
      .sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error('error:', error);
    res.status(500).json({ error });
  }
});
