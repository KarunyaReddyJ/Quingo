import { sendFriendRequest, acceptFriendRequest, removeFriend,getFriendRequestDetails } from "../utils/friendRequestUtils.js"

export const acceptRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const response = await acceptFriendRequest(receiverId, senderId);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


export const sendRequest = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const response = await sendFriendRequest(senderId, receiverId);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const seeRequest =async(req,res)=>{
 
  try {
    const {id}=req.params
    
    const requests = await getFriendRequestDetails(id)
   
    res.status(201).json(requests);
  } catch (error) {
    console.error('error while fetching friend requests,',error)
    res.status(400).json({ error: error.message });
  }
}

export const removeFromFriend = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const response = await removeFriend(senderId, receiverId);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// getFriendRequestDetails is now handled in friendRequestUtils.js using FriendRequest model