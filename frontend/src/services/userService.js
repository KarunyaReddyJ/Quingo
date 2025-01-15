import axios from 'axios'
import { userDetailInLocalstorage } from '../constants/constants'
const END_POINT=import.meta.env.VITE_BACKEND_ENDPOINT

export const searchUserProfile=async(name)=>{
    const token=JSON.parse(localStorage.getItem(userDetailInLocalstorage)).token
    const response=await axios.get(`${END_POINT}/users/profile/search/${name}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    if(response.status===200){
        return response.data
    }
    console.log(response.data)
    return response.data
}


export const getUserProfile=async(id)=>{
    const token=JSON.parse(localStorage.getItem(userDetailInLocalstorage)).token
    const response=await axios.get(`${END_POINT}/users/profile/id/${id}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    if(response.status===200){
        return response.data
    }
    console.log(response.data)
    return response.data
}