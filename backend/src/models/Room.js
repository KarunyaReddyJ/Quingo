import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  isGroupChat: { type: Boolean, default: false },
  avatar: { type: String, default: '' }, // URL or base64 string
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
}, { timestamps: true });

const chatRoom = mongoose.model('ChatRoom', chatRoomSchema);

export default chatRoom
