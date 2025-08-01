import axios from 'axios'
import constants from '../constants/constants'
const END_POINT=import.meta.env.VITE_BACKEND_ENDPOINT
const token=JSON.parse(localStorage.getItem(constants.dbName))?.token || ''
const senderId=JSON.parse(localStorage.getItem(constants.dbName))?._id || ''
export const sendFriendRequest = async (receiverId) => {
    try {
      const response = await axios.post(`${END_POINT}/friends/request`, {senderId,receiverId}, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.warn("Unexpected response status:", response.status, response.data);
        return null;
      }
    } catch (error) {
      handleError("sending message", error);
      return null;
    }
  };
  

  export const getRoomMessages = async (roomId) => {
    try {
      const response = await axios.get(`${END_POINT}/messages/${roomId}/messages`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.warn("Unexpected response status:", response.status, response.data);
        return null;
      }
    } catch (error) {
      handleError("fetching room messages", error);
      return null;
    }
  };
  

  export const createChatRoom = async (data) => {
    try {
      const response = await axios.post(`${END_POINT}/messages/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.warn("Unexpected response status:", response.status, response.data);
        return null;
      }
    } catch (error) {
      handleError("creating chat room", error);
      return null;
    }
  };
  

  export const getUserChatRooms = async (userId) => {
    try {
      const response = await axios.get(`${END_POINT}/messages/rooms/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        console.warn("Unexpected response status:", response.status, response.data);
        return null;
      }
    } catch (error) {
      handleError("fetching user chat rooms", error);
      return null;
    }
  };
  
  const handleError = (action, error) => {
    if (error.response) {
      console.error(`Error ${action}:`, error.response.status, error.response.data);
    } else if (error.request) {
      console.error(`No response received while ${action}:`, error.request);
    } else {
      console.error(`Unexpected error while ${action}:`, error.message);
    }
  };