import React from "react";
import ChatList from "../components/ChatList";
import ChatRoom from "../components/ChatRoom";
import { useChats } from "../hooks/useChat";

const ChatInterface = () => {
  const { chatOpened: activeRoomId } = useChats()

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/3 border-r border-gray-300  overflow-y-auto">
        <ChatList />
      </div>
      <div className="w-2/3 flex flex-col">
        {activeRoomId ? (
          <ChatRoom roomId={activeRoomId} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-lg">
            Select a chat room to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;