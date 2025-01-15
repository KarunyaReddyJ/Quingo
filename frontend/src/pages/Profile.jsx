import React from 'react'
import ProfileModal from '../components/ProfileModal'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
const Profile = () => {
    const {userDetails,loading}=useAuth()
    const navigate=useNavigate()
    if(loading  ){
        return (<h1>Loading....</h1>)
    }
    else if( ! userDetails){
        navigate('/login')
    }
  return (
    <div><ProfileModal id={userDetails._id} name={userDetails.name} email={userDetails.email} /></div>
  )
}

export default Profile