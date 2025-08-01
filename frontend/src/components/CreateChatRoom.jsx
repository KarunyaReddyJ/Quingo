import { useState } from "react";
import { createChatRoom } from "../utils/chat";
import toast from "react-hot-toast";
import Button from "../utils/Button";
import { useNavigate } from "react-router-dom";

const CreateChatRoom = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [participants, setParticipants] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || participants.length === 0) {
      toast.error("Room name and at least one participant required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("participants", JSON.stringify(participants));
    
    if (avatar) formData.append("avatar", avatar);
    
    try {
      
      const response = await createChatRoom(formData);
      toast.success("Chat room created!");
      navigate(-1);
      setName("");
      setDescription("");
      setParticipants([]);
      setAvatar(null);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        Create Chat Room
      </h2>

      {/* Room Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Room Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter room name"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description (optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Avatar Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Upload Room Avatar
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          className="w-full text-sm text-gray-600 dark:text-gray-400"
        />
        {avatar && (
          <div className="mt-2">
            <img
              src={URL.createObjectURL(avatar)}
              alt="Preview"
              className="w-16 h-16 object-cover rounded-full border"
            />
          </div>
        )}
      </div>

      {/* Participants */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Participants <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Comma-separated user IDs (e.g., u1,u2)"
          onChange={(e) =>
            setParticipants(
              e.target.value.split(",").map((id) => id.trim()).filter(Boolean)
            )
          }
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button text="Create Room" className="bg-red-700" />
      </div>
    </form>
  );
};

export default CreateChatRoom;
