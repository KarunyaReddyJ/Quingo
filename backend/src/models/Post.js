import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    content: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    commentCount: {type : Number , default : 0},
    media: { type: String }, // URL for media (image/video)
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
