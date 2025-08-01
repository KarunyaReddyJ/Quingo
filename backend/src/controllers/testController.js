import User from "../models/User.js"; // update path as needed
import Post from "../models/Post.js";
export const getAllUserData = async (req, res) => {
    try {
        const { fields } = req.body;

        if (!Array.isArray(fields) || fields.length === 0) {
            return res.status(400).json({ error: "fields must be a non-empty array." });
        }

        // Optional: Whitelist allowed fields to prevent unsafe field access
        const allowedFields = ['_id', 'name', 'email', 'avatar', 'createdAt', 'updatedAt'];
        const safeFields = fields.filter(f => allowedFields.includes(f));

        if (safeFields.length === 0) {
            return res.status(400).json({ error: "None of the requested fields are allowed." });
        }

        const projection = safeFields.join(' '); // e.g., 'name email avatar'

        const users = await User.find({}).select(projection);

        res.status(200).json({ users });
    } catch (error) {
        console.error("Error in getAllUserData:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};




export const createPost = async (req, res, next) => {
    try {
        const { user,
            content,
            likes,
            comments,
            media,
            createdAt,
            updatedAt } = req.body
        
        const postCreated = await Post.create({ user,
            content,
            likes,
            comments,
            media,
            createdAt,
            updatedAt })

        if (postCreated) {
            res.status(201).json({ post: postCreated })
        }

    } catch (error) {
        console.error('Error while creating new post,', error)
        next(error)
    }
}