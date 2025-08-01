import { useEffect, useState, useRef } from "react";
import { useAuth } from "../hooks/useAuth";
import { getRoomMessages, sendMessage } from "../utils/chat";
import { useChats } from "../hooks/useChat";
import { LoadingComponent } from "./Loading";
import socket from "../utils/socket";
const ChatRoom = ({ roomId }) => {
  const { userDetails } = useAuth();
  const { loading, setChatRooms } = useChats();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef(null);
  const notificationSound = new Audio("/notification.mp3");
  const fetchMessages = async () => {
    const messages = await getRoomMessages(roomId);
    setMessages(messages);
  };

  const sendMessageToRoom = async () => {
    const message = await sendMessage(roomId, {
      sender: userDetails._id,
      content: text,
    });
    const messageObj = {
      ...message,
      content: text,
      sender: { _id: userDetails._id, name: userDetails.name },
      createdAt: new Date(),
    };

    setMessages([...messages, messageObj]);
    socket.emit("send_message", { ...messageObj, roomId });
    setText("");
  };

  useEffect(() => {
    socket.emit("join_room", roomId);

    socket.on("receive_message", (newMessage) => {
      console.log("received", newMessage);
      notificationSound.play().catch((e) => {
        // Ignore autoplay issues (common in Chrome until user interacts)
        console.warn("Sound play failed:", e);
      });
      setMessages((prev) => [...prev, newMessage]);
    });
    fetchMessages();
    return () => {
      socket.off("receive_message");
    };
  }, [roomId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setChatRooms((prev) => {
      const updatedRooms = prev.map((room) => {
        if (room._id === roomId) {
          return {
            ...room,
            lastMessage: messages[messages.length - 1],
          };
        }
        return room;
      });

      updatedRooms.sort(
        (a, b) =>
          new Date(b?.lastMessage?.createdAt) -
          new Date(a?.lastMessage?.createdAt)
      );

      return [...updatedRooms];
    });
  }, [messages, roomId, setChatRooms]);

  if (loading) return <LoadingComponent />;

  return (
    <div className="flex flex-col h-[100vh] w-full max-w-4xl mx-auto border rounded bg-white">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => {
          const isCurrentUser = msg.sender._id === userDetails._id;
          const time = new Date(msg.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={i}
              className={`p-2 my-1 rounded max-w-[60%] text-black text-left ${
                isCurrentUser ? "ml-auto bg-blue-200 " : "mr-auto bg-gray-200 "
              }`}
            >
              <strong className="whitespace-pre-wrap break-words text-green-500">
                {msg?.sender.name}
              </strong>
              <div className="whitespace-pre-wrap break-words">
                {msg?.content}
              </div>
              <div className="text-xs text-gray-600 mt-1">{time}</div>
            </div>
          );
        })}
      </div>

      {/* Input area */}
      <div className="border-t p-4 flex gap-2 sticky bottom-0 bg-white">
        <input
          className="border flex-1 p-2 rounded text-black"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={sendMessageToRoom}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
