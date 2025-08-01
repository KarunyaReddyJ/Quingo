// friendRequestUtils.js
import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js";

// Send a friend request
export const sendFriendRequest = async (senderId, receiverId) => {
  if (senderId === receiverId) throw new Error("Cannot send friend request to yourself");
  const sender = await User.findById(senderId);
  const receiver = await User.findById(receiverId);
  if (!sender || !receiver) throw new Error("User not found");

  // Check if a pending request already exists
  const existing = await FriendRequest.findOne({ sender: senderId, receiver: receiverId, status: "pending" });
  if (existing) throw new Error("Friend request already sent");

  const friendRequest = new FriendRequest({ sender: senderId, receiver: receiverId });
  await friendRequest.save();
  return friendRequest;
};

// Accept a friend request
export const acceptFriendRequest = async (receiverId, senderId) => {
  const friendRequest = await FriendRequest.findOne({ sender: senderId, receiver: receiverId, status: "pending" });
  if (!friendRequest) throw new Error("No pending friend request found");

  friendRequest.status = "accepted";
  await friendRequest.save();

  // Add each other as friends
  const receiver = await User.findById(receiverId);
  const sender = await User.findById(senderId);
  if (!receiver || !sender) throw new Error("User not found");

  if (!receiver.friends.includes(senderId)) receiver.friends.push(senderId);
  if (!sender.friends.includes(receiverId)) sender.friends.push(receiverId);
  await receiver.save();
  await sender.save();

  return { receiver, sender };
};

// Remove a friend
export const removeFriend = async (userId, friendId) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);
  if (!user || !friend) throw new Error("User not found");

  user.friends = user.friends.filter((id) => id.toString() !== friendId.toString());
  friend.friends = friend.friends.filter((id) => id.toString() !== userId.toString());
  await user.save();
  await friend.save();

  // Optionally, remove any friend requests between these users
  await FriendRequest.deleteMany({
    $or: [
      { sender: userId, receiver: friendId },
      { sender: friendId, receiver: userId }
    ]
  });

  return { user, friend };
};

// Get all friend requests for a user (received or sent)
export const getFriendRequestDetails = async (userId) => {
  // Received requests
  try {
  
    const received = await FriendRequest.find({ receiver: userId })
    .populate('sender', '_id name email profilePicture')
    .sort({ createdAt: -1 });
   
  // Sent requests
  const sent = await FriendRequest.find({ sender: userId })
    .populate('receiver', '_id name email profilePicture')
    .sort({ createdAt: -1 });
  return { received, sent };
  } catch (error) {
    console.error('error while fetching friend requests,',error.message)

  }
};