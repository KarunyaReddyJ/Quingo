import User from "../models/User.js";
import Post from "../models/Post.js"
export const searchProfile=async(req,res,next)=>{
   // console.log('enetered',req)
    const {name}=req.params
   // console.log('entered view profile ',name)
    try {
        const query = { name: { $regex: name, $options: 'i' } }; 
        const results = await User.find(query)
        res.status(200).json(results)
    } catch (error) {
        console.error("cannot search profile of user "+name,error)
        next(error)
    }
}

export const viewProfile=async(req,res,next)=>{
    try {
        const {id}=req.params
        const profile = await User.findById(id)
        const friendIds=profile.friends
        const userPromises = friendIds.map(async (friend) => {
            const user = await User.findById(friend,'name');
            return { id:friend,name:user?.name };
        });

        const resolvedFeed = await Promise.all(userPromises);
        const posts=await Post.find({user:id}).sort({createdAt:-1}).limit(3)
        if(!profile || !posts){
            return res.status(401).send("No user found")
        }
        res.status(200).json({friends:resolvedFeed,posts})
    } catch (error) {
        console.error("cannot find profile of user ",error)
        next(error)
    }
} 