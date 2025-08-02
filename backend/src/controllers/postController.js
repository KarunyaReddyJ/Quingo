import Comment from "../models/Comment.js";
import Post from '../models/Post.js'
import User from '../models/User.js'

export const createPost=async(req,res,next)=>{
    try {
        const {content}=req.body
        const User=req.user
        const postCreated=await Post.create({content,user: User._id})

        if(postCreated){
            res.status(201).json({post:postCreated})
        }

    } catch (error) {
        console.error('Error while creating new post,',error )
        next(error)
    }
}

export const readPosts = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(limit, 10);
        const skip = (pageNumber - 1) * pageSize;
        const posts = await Post.find({}).sort({createdAt:-1}).skip(skip).limit(pageSize);
        const cache = new Map();

        const userPromises = posts.map(async (post) => {
            if (cache.has(post.user.toString())) {
                return { ...post._doc, user: cache.get(post.user.toString()) };
            }
            const user = await User.findById(post.user);
            cache.set(post.user.toString(), user.name);
            return { ...post._doc, user: user.name };
        });

        const resolvedFeed = await Promise.all(userPromises);
        res.status(200).json(resolvedFeed);
    } catch (error) {
        console.error('Error while accessing posts:', error);
        next(error);
    }
};

export const deletePost=async(req,res,next)=>{
    //console.log('arrived')
    const {id}=req.params
    //console.log('post id',id)
    
    try {
        const postToBeDeleted=await Post.findByIdAndDelete(id)
        if(!postToBeDeleted){
            return res.status(401).send('No Post Found')
        }
        res.status(200).send('successfully deleted')
    } catch (error) {
        console.error('Error while deleting posts:', error);
        next(error);
    }
}

export const likePost=async(req,res,next)=>{
    const {id}=req.params
    //if(!id)
    //console.log('entered like',req)
    try {
        const post=await Post.findById(id)
        const user=req.user
        // console.log('post got',post,id)
        if(!post){
            return res.status(401).send('No Post Found')
        }
        const totalLikes=post['likes'].length
        const likes=post['likes'].filter(ID=>{
            console.log(ID,user._id)
            return ID!==user._id
        })
        if(totalLikes===likes.length){
            likes.push(user._id)
        }
        const updatedPost=await Post.findByIdAndUpdate(id,{likes})
        res.status(200).json(updatedPost)
    } catch (error) {
        console.error('Error while deleting posts:', error);
        next(error);
    }
}


export const addComment = async (req, res) => {
  const { postId, content, parentComment='' } = req.body;
  console.log({ postId, content, parentComment })
  const userId = req.user._id; 

  try {
    const comment = await Comment.create({
      post: postId,
      user: userId,
      content,
      parentComment: parentComment || null,
    });

    await Post.findByIdAndUpdate(postId, { $inc: { commentCount: 1 } });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};


export const getPostComments = async (req, res) => {
  const { id } = req.params;

  try {
    const topLevelComments = await Comment.find({ post: id, parentComment: null })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    const commentTree = await Promise.all(
      topLevelComments.map(async (comment) => {
        const replies = await getRepliesRecursive(comment._id);
        return { ...comment.toObject(), replies };
      })
    );

    res.json(commentTree);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

const getRepliesRecursive = async (parentId) => {
  const replies = await Comment.find({ parentComment: parentId }).populate("user", "name");
  return Promise.all(
    replies.map(async (reply) => {
      const nestedReplies = await getRepliesRecursive(reply._id);
      return { ...reply.toObject(), replies: nestedReplies };
    })
  );
};
