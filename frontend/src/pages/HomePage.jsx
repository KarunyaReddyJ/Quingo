import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import PostModal from "../components/PostModal";
import { usePosts } from "../hooks/usePosts";
import { searchUserProfile } from "../services/userService";
import UserProfile from "../components/UserProfile";
import Input from "../utils/Input";
import Button from "../utils/Button";

const HomePage = () => {
  const { userDetails, loading } = useAuth();
  const { posts: Posts, loading: postsLoading } = usePosts();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    const data = await searchUserProfile(searchText.trim());
    setSearchResults(data);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <Input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search username"
          style={{
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "10px",
            height:'30px'
          }}
        />
        <Button
          text="Search"
          onChange={handleSubmit}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer"
          }}
        />
      </div>
      {searchResults.length > 0 && <UserProfile profiles={searchResults} />}

    
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
