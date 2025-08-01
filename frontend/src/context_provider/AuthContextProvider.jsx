import { AuthContext } from '../context/AuthContext';
import {useState,useEffect} from 'react';
import constants from '../constants/constants';
export const AuthContextProvider=({children})=>{
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkIfUserActiveSession=()=>{
            const x=localStorage.getItem(constants.dbName)
                console.log('data stored',x)
            const sessionStatus=JSON.parse(localStorage.getItem(constants.dbName)) || null
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