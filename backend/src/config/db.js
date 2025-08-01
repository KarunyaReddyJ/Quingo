import mongoose from 'mongoose';
import { DB_PASSWORD,DB_USERNAME,DB_NAME } from './env.js'; 
// const URI=`mongodb+srv://karunyareddy1418:JMppcPdHTsHfYZJk@cluster0.du2qj.mongodb.net/socialmediaapp?retryWrites=true&w=majority&appName=Cluster0`
const URI='mongodb://localhost:27017/socialmediaapp'
const connectDb=async()=>{
    try {
        console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD, process.env.DB_NAME);
        await mongoose.connect(URI)
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        console.error('Error details:', error.message);
        throw new Error(error)
    }
}

export default connectDb