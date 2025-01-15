import axios from 'axios'
const END_POINT=import.meta.env.VITE_BACKEND_ENDPOINT
import { userDetailInLocalstorage } from '../constants/constants'
export const userLogin=async(data)=>{
    const response=await axios.post(`${END_POINT}/auth/login`,data)
    if(response.status===200){
        localStorage.setItem(userDetailInLocalstorage,JSON.stringify(response.data))
        return response.data
    }
    console.log(response.data)
    return response.data
}

export const userLogout=()=>{
    localStorage.removeItem(userDetailInLocalstorage)
}