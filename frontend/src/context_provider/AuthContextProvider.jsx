import { AuthContext } from '../context/AuthContext';
import {useState,useEffect} from 'react';
import { userDetailInLocalstorage } from '../constants/constants';
export const AuthContextProvider=({children})=>{
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkIfUserActiveSession=()=>{
            const x=localStorage.getItem(userDetailInLocalstorage)
                console.log('data stored',x)
            const sessionStatus=JSON.parse(localStorage.getItem(userDetailInLocalstorage)) || null
            setUserDetails(sessionStatus)
            setLoading(false)
        }
        checkIfUserActiveSession()
    }, []);

    return (
        <AuthContext.Provider value={{userDetails,setUserDetails,loading}} >
            {children}
        </AuthContext.Provider>
    )
}