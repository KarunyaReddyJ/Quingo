// friendRequestUtils.js
import User from "../models/User.js";

// Send a friend request
export const sendFriendRequest = async (senderId, receiverId) => {
  const sender = await User.findById(senderId);
  const receiver = await User.findById(receiverId);

  if (!sender || !receiver) {
    throw new Error("User not found");
  }

  if (receiver.friendRequests.includes(senderId)) {
    throw new Error("Friend request already sent");
  }

  receiver.friendRequests.push(senderId);
  await receiver.save();
  return receiver;
};

// Accept a friend request
export const acceptFriendRequest = async (userId, requesterId) => {
  const user = await User.findById(userId);
  const requester = await User.findById(requesterId);

  if (!user || !requester) {
    throw new Error("User not found");
  }

  if (!user.friendRequests.includes(requesterId)) {
    throw new Error("No friend request found");
  }

  user.friendRequests = user.friendRequests.filter(
    (id) => id.toString() !== requesterId.toString()
  );

  user.friends.push(requesterId);
  requester.friends.push(userId);

  await user.save();
  await requester.save();

  return { user, requester };
};

// Remove a friend
export const removeFriend = async (userId, friendId) => {
  const user = await User.findById(userId);
  const friend = await User.findById(friendId);

  if (!user || !friend) {
    throw new Error("User not found");
  }

  user.friends = user.friends.filter((id) => id.toString() !== friendId.toString());
  friend.friends = friend.friends.filter((id) => id.toString() !== userId.toString());

  await user.save();
  await friend.save();

  return { user, friend };
};
