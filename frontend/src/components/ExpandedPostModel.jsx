import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { addComments, getComments } from "../services/postServices";
import toast from "react-hot-toast";
import Comment from "./Comment";
import Input from "../utils/Input";
import Button from "../utils/Button";
import { useAuth } from "../hooks/useAuth";
const ExpandedPostModel = () => {
  const location = useLocation();
  const { userDetails } = useAuth();
  const { id, user, content, likes = [], commentCount } = location.state || {};
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentData = await getComments(id);
        console.log("response", commentData);
        setComments(commentData || []);
      } catch (err) {
        toast.error("Failed to load comments");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchComments();
    } else {
      toast.error("Invalid post data!");
      setLoading(false);
    }

    // Optional: clean up
    return () => setComments([]);
  }, [id]);

  const commentPost = async () => {
    const trimmedInput = input.trim();
    setInput("");
    if (!trimmedInput) return;
    console.log(id, trimmedInput);
    const response = await addComments(id, trimmedInput);
    if (!response.error) {
      setComments((prev) => [
        ...prev,
        {
          ...response.data,
          user: { name: userDetails.name, _id: userDetails._id },
        },
      ]);
    }
    console.log("response", response);
  };
  if (loading) return <div className="p-4">Loading post...</div>;

  return (
    <div className="max-w-2xl w-full mx-auto px-4 p-6   bg-gray-500 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">
        Post by {user?.name || "Unknown"}
      </h2>
      <p
        className="text-left text-gray-600 dark:text-gray-300 whitespace-pre-wrap mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>

      <div className="mb-4">
        <span className="text-sm text-gray-500">👍 {likes.length} Likes</span>
        <span className="ml-4 text-sm text-gray-950">
          💬 {commentCount || comments.length} Comments
        </span>
      </div>

      <Input
        onChange={(e) => setInput(e.target.value)}
        placeholder="reply...."
        type="text"
        value={input}
      />
      <Button text="Comment" onClick={commentPost} className="bg-yellow-500" />

      <div className="border-t pt-4">
        <h3 className="font-medium mb-2">Comments:</h3>
        {comments.length > 0 ? (
          <ul className="space-y-2">
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default ExpandedPostModel;
