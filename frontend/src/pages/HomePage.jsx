import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import PostModal from "../components/PostModal";
import { usePosts } from "../hooks/usePosts";
import { getFeed } from "../services/postServices";
import toast from "react-hot-toast";
const HomePage = () => {
  const { userDetails, loading } = useAuth();
  const {
    loading: postsLoading,
    setLoading: setPostLoading,
    posts,
    setPosts,
  } = usePosts();
  const navigate = useNavigate();
  //const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!loading) {
      if (!userDetails) {
        navigate("/login");
      }
    }
  }, [loading, navigate, userDetails]);

  useEffect(() => {
    const fetchPosts = async () => {
      setPostLoading(true);
      try {
        const data = await getFeed(page);
        setPosts(data);
      } catch (error) {
        console.error("cannot fetch posts", error);
        console.error('error message is',error.message);
        toast.error("Cannot fetch posts");
      } finally {
        setPostLoading(false);
      }
    };
    fetchPosts();
  }, [page, setPostLoading, setPosts]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
      
      const id=toast.loading("Loading more posts")
      console.log('toast id',id)
      setTimeout(() => {
        toast.dismiss(id)
      }, 1000);
      
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (!postsLoading) {
  //     setPosts(Posts);
  //   }
  // }, [Posts, postsLoading]);

  if (loading ) {
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
        {
          postsLoading && <div>Loading...</div>
        }
      </div>
    </div>
  );
};

export default HomePage;
