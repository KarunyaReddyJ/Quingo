import ChatRoom from '../models/Room.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import mongoose from 'mongoose'
// Create a new chat room
export const createChatRoom = asyncHandler(async (req, res) => {
   try {
    const { name, description, participants,avatar='' } = req.body;
    const parsedParticipants = JSON.parse(participants); // ✅ parse it here

    // Optional: validate each ID is a valid ObjectId
    const validIds = parsedParticipants.filter(id => mongoose.Types.ObjectId.isValid(id));

    const room = new ChatRoom({
      name,
      description,
      participants: validIds,
      isGroupChat: true,
      avatar: req.file ? req.file.buffer : undefined,
    });

    await room.save();
    res.status(200).json({ success: true, room });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
  }
  });

// Get all chat rooms for a user
export const getUserChatRooms = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;

    const rooms = await ChatRoom.find({ participants: userId })
      .populate('participants', 'name email')
      .populate('lastMessage')
      .sort({ updatedAt: -1 });

    res.status(200).json(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
});
