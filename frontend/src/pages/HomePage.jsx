import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import PostModal from "../components/PostModal";
import { usePosts } from "../hooks/usePosts";

const HomePage = () => {
  const { userDetails, loading } = useAuth();
  const { posts: Posts, loading: postsLoading } = usePosts();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!loading) {
      if (!userDetails) {
        navigate("/login");
      }
    }
  }, [loading, navigate, userDetails]);

  useEffect(() => {
    if (!postsLoading) {
      setPosts(Posts);
    }
  }, [Posts, postsLoading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      

    
        <div>
        
          {posts.map((post) => (
            <PostModal
              key={post._id}
              user={post.user}
              content={post.content}
              likes={post.likes?.length || 0}
              comments={post.comments?.length || 0}
              id={post._id}
            />
          ))}
          
        </div>
      
    </div>
  );
};

export default HomePage;
