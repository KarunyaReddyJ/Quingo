import { deletePost, likePost } from '../services/postServices';
import toast from 'react-hot-toast';
import { usePosts } from '../hooks/usePosts';
import { useState } from 'react';
import { useAuth } from "../hooks/useAuth";

// eslint-disable-next-line react/prop-types
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

  return (
    <div style={styles.postContainer}>
      <h3 style={styles.postUser}>{post.user}</h3>

      <p style={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></p>

      <hr style={styles.separator} />

      <div style={styles.postFooter}>
        <div onClick={likeThePost} style={styles.likeButton}>
          {post.likes} likes
        </div>
        <div style={styles.commentCount}>
          {post.comments} comments
        </div>
        {userDetails && userDetails.name === post.user && (
          <button style={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  postContainer: {
    border: '2px solid #ddd',
    borderRadius: '10px',
    marginBottom: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  postUser: {
    fontSize: '18px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#333',
  },
  postContent: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#555',
  },
  separator: {
    margin: '10px 0',
    borderTop: '1px solid #eee',
  },
  postFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
  },
  likeButton: {
    cursor: 'pointer',
    color: '#007BFF',
  },
  commentCount: {
    color: '#888',
  },
  deleteButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    background: 'transparent',
    color: '#f44336', // Red color for delete button
    fontSize: '14px',
  },
};

export default PostModal;
