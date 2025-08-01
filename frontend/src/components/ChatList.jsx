import React from "react";
import { useChats } from "../hooks/useChat";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const { chatRooms, setChatOpened, chatOpened } = useChats();
  const navigate = useNavigate();

  const openChat = (roomId) => {
    setChatOpened(roomId);
  };

  const handleCreateRoom = () => {
    navigate("/create-chat");
  };

  return (
    <div className="p-4 max-w-3xl bg-slate-800 h-full mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Chat Rooms
        </h2>
        <button
          onClick={handleCreateRoom}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md"
        >
          + Create Room
        </button>
      </div>

      {/* Chat Room List */}
      {chatRooms?.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 italic">
          No chat rooms yet.
        </p>
      ) : (
        <div className="space-y-3">
          {chatRooms.map((room) => (
            <div
              key={room._id}
              className={`flex items-start p-4 rounded-lg shadow cursor-pointer transition
    ${
      chatOpened === room._id
        ? "bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 ring-1 ring-blue-300 dark:ring-blue-600"
        : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
    }
  `}
              onClick={() => openChat(room._id)}
            >
              {/* Avatar */}
              <div className="flex-shrink-0 w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center font-bold text-gray-700 dark:text-white mr-3">
                {room.name?.[0]?.toUpperCase() || "?"}
              </div>

              {/* Room Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {room.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {room.description || "No description"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatList;
