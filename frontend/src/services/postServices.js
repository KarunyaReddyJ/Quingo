import axios from 'axios'
import { userDetailInLocalstorage } from '../constants/constants'
const END_POINT = import.meta.env.VITE_BACKEND_ENDPOINT
const token = JSON.parse(localStorage.getItem(userDetailInLocalstorage))?.token || ''
console.log('token', token)
export const getFeed = async (page = 1) => {
    const response = await axios.get(`${END_POINT}/posts?page=${page}&limit=10`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        withCredentials: true
    })
    if (response.status === 200) {
        return response.data
    }
    console.log(response.data)
    return response.data
}


export const addPost = async (content) => {

    const response = await axios.post(`${END_POINT}/posts`, { content }, {
        headers: {
            Authorization: `Bearer ${token}`
        },
        withCredentials: true
    })
    if (response.status === 201) {
        return response.data
    }
    console.log(response.data)
    return response.data
}

export const deletePost = async (id) => {

    const response = await axios.delete(`${END_POINT}/posts/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,

        },
        withCredentials: true
    })
    if (response.status === 200) {
        return response.data
    }
    console.log(response.data)
    return response.data
}


export const likePost = async (postId) => {

    console.log('post id', postId, token)
    const response = await axios.put(`${END_POINT}/posts/like/${postId}`, {
        postId,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,

        },
        withCredentials: true

    })
    if (response.status === 200) {
        return response.data
    }
    console.log(response.data)
    return response.data
}


export const getComments = async (postId) => {
    try {

        const response = await axios.get(`${END_POINT}/posts/comment/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`,

            },
            withCredentials: true

        })
        if (response.status === 200) {
            return response.data
        }
        console.log(response.data)
        return { data: response.data, error: null }
    } catch (error) {
        console.error('error while commenting:', error)
        return { error, data: null }
    }
}



export const addComments = async (postId, content, parentComment = '') => {
    try {

        const obj = { postId, content, parentComment: parentComment || '' }
        const response = await axios.post(`${END_POINT}/posts/comment`, { postId,content,parentComment }, {
            headers: {
                Authorization: `Bearer ${token}`,

            },
            withCredentials: true

        })
        if (response.status === 200) {
            return response.data
        }
        console.log(response.data)
        return { data: response.data, error: null }
    } catch (error) {
        console.error('error while commenting:', error)
        return { error, data: null }
    }
}