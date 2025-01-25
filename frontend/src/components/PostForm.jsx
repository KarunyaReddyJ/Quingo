import { useState } from "react";
import { addPost } from "../services/postServices";
import toast from "react-hot-toast";
import { usePosts } from "../hooks/usePosts";
import TextEditor from "./TextEditor";
import Button from "../utils/Button";

const PostForm = () => {
  const [content, setPostData] = useState("");
  const { setPosts } = usePosts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await addPost(content);
    console.log("added post", response);
    if (response) {
      setPosts((prev) => [response, ...prev]);
      toast.success("Created post");
      setPostData("");
      return;
    }
    toast.error("Sorry");
  };

  return (
    <form className="space-y-4 p-6  rounded-lg shadow-sm max-w-xl mx-auto">
      <TextEditor content={content} setContent={setPostData} />

      <Button text={"Post"} onChange={handleSubmit} />
    </form>
  );
};

export default PostForm;
