import { PostContext } from '../context/PostContext';
import {useState,useEffect} from 'react';
import { getFeed } from '../services/postServices.js';
import { useAuth } from '../hooks/useAuth.js';

export const PostContextProvider=({children})=>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {userDetails}=useAuth()
    useEffect(() => {
        const checkIfUserActiveSession=async()=>{
            if(!userDetails) return;
            const data=await getFeed()
            setPosts(data)
            setLoading(false)
            console.log('from post context provider')
        }
        checkIfUserActiveSession()
    }, [userDetails]);

    return (
        <PostContext.Provider value={{posts,setPosts,loading,setLoading}} >
            {children}
        </PostContext.Provider>
    )
}