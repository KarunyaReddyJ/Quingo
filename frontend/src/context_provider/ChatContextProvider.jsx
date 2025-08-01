import { ChatContext } from "../context/ChatContext";
import { useState, useEffect } from "react";
import constants from "../constants/constants";
import { getUserChatRooms } from "../utils/chat";

export const ChatContextProvider = ({ children }) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [chatOpened, setChatOpened] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const checkIfUserActiveSession = async () => {
      try {
        setLoading(true);
        const sessionStatus =
          JSON.parse(localStorage.getItem(constants.dbName)) || null;
        const rooms = await getUserChatRooms(sessionStatus._id);
        console.log("rooms", rooms);
        if (rooms)
          setChatRooms(() => {
            rooms.sort(
              (a, b) =>
                new Date(b?.lastMessage?.createdAt) -
                new Date(a?.lastMessage?.createdAt)
            );
            return rooms;
          });
      } catch (error) {
        console.log("error while fetching chat rooms of user:", error);
      } finally {
        setLoading(false);
      }
    };
    checkIfUserActiveSession();
  }, []);
  
  return (
    <ChatContext.Provider
      value={{ chatRooms,setChatRooms, chatOpened, setChatOpened, loading }}
    >
      {children}
    </ChatContext.Provider>
  );
};
