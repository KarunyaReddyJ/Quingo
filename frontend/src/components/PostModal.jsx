import { deletePost, likePost } from '../services/postServices';
import toast from 'react-hot-toast';
import { usePosts } from '../hooks/usePosts';
import { useState } from 'react';
import { useAuth } from "../hooks/useAuth";
import { FaHeart, FaRegHeart, FaCommentAlt, FaTrashAlt } from "react-icons/fa";

const PostModal = ({ id, user, content, likes, comments }) => {
  const { setPosts } = usePosts();
  const { userDetails } = useAuth();
  const [post, setPost] = useState({ id, user, content, likes, comments });

  const likeThePost = async () => {
    const data = await likePost(id);
    setPost(data);
  };

  const handleDelete = async () => {
    const response = await deletePost(id);
    if (!response) {
      toast.error('Unable to delete');
      return;
    }
    setPosts((posts) => posts.filter((post) => post._id !== id));
    toast.success('Successfully deleted');
  };

  const isLiked = post.likes > 0; // customize this logic if you track individual user likes

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 mb-6 shadow hover:shadow-lg transition-all">
      {/* Post User */}
      <h3 className="text-left text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {post.user}
      </h3>

      {/* Post Content */}
      <p
        className="text-left text-gray-600 dark:text-gray-300 whitespace-pre-wrap mb-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></p>

      <hr className="my-3 border-gray-200 dark:border-gray-600" />

      {/* Post Actions */}
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
        <button
          onClick={likeThePost}
          className="flex items-center gap-1 hover:text-red-500 transition"
        >
          {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          <span>{post.likes}</span>
        </button>

        <div className="flex items-center gap-1">
          <FaCommentAlt />
          <span>{post.comments}</span>
        </div>

        {userDetails?.name === post.user && (
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
          >
            <FaTrashAlt />
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PostModal;
