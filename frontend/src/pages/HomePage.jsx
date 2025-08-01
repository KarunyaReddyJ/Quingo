import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import PostModal from "../components/PostModal";
import { usePosts } from "../hooks/usePosts";
import { getFeed } from "../services/postServices";
import toast from "react-hot-toast";
import { indexedDBService } from "../services/localDatastore";
import { LoadingComponent } from "../components/Loading";
import { createDummyUsers,fakePosts } from "../utils/bulkimport";
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
        setPosts(prev=>[...prev,data]);
        await indexedDBService.putMany(data)
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
  //  fakePosts()
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (!postsLoading) {
  //     setPosts(Posts);
  //   }
  // }, [Posts, postsLoading]);

  if (loading) {
    return (
      <LoadingComponent/>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-8 px-4 sm:px-8 font-sans">
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg"
          >
            <PostModal
              user={post.user}
              content={post.content}
              likes={post.likes?.length || 0}
              comments={post.comments?.length || 0}
              id={post._id}
            />
          </div>
        ))}

        {postsLoading && (
          <div className="flex justify-center py-4 text-gray-400">Loading more...</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
