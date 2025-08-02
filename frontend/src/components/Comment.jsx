import { formatDistanceToNow } from "date-fns";
import { FaUserCircle, FaHeart, FaReply } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Button from "../utils/Button";
import Input from "../utils/Input";
import { addComments } from "../services/postServices";

const Comment = ({ comment, level = 0 }) => {
  const { userDetails } = useAuth();
  const [input, setInput] = useState("");
  const [comments, setComments] = useState(comment?.replies || []);
  const [showReply, setShowReply] = useState(false);

  if (!comment) return null;

  const { content, createdAt, user, likes = [] } = comment;

  const commentPost = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    setInput("");
    const response = await addComments(comment.post, trimmedInput, comment._id);
    if (!response.error) {
      setComments((prev) => [
        ...prev,
        {
          ...response.data,
          user: { name: userDetails.name, _id: userDetails._id },
        },
      ]);
      setShowReply(false);
    }
  };

  return (
    <div
      className={`relative rounded-md p-3 mb-3 ${
        level > 0 ? "ml-4 border-l-[2px] border-gray-300 dark:border-gray-600 pl-4" : ""
      } bg-gray-50 dark:bg-gray-800 shadow-sm`}
    >
      {/* Top: user & time */}
      <div className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
        <FaUserCircle className="text-xl text-gray-500 dark:text-gray-300" />
        <span className="font-semibold">{user?.name || "Anonymous"}</span>
        <span className="text-xs text-gray-400 ml-auto">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>

      {/* Content */}
      <div className="text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-wrap">
        {content}
      </div>

      {/* Likes + Reply toggle */}
      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
        {likes.length > 0 && (
          <span className="flex items-center gap-1">
            <FaHeart className="text-red-400" />
            {likes.length} {likes.length === 1 ? "like" : "likes"}
          </span>
        )}
        <button
          onClick={() => setShowReply((prev) => !prev)}
          className="flex items-center gap-1 hover:underline"
        >
          <FaReply /> Reply
        </button>
      </div>

      {/* Reply input */}
      {showReply && (
        <div className="mt-3 space-y-2">
          <Input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a reply..."
            type="text"
            value={input}
          />
          <Button text="Comment" onClick={commentPost} className="bg-yellow-500" />
        </div>
      )}

      {/* Render replies */}
      {comments.length > 0 && (
        <div className="mt-3">
          {comments.map((reply) => (
            <Comment key={reply._id} comment={reply} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
