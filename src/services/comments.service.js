import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
})
const createComments = (post) => axiosInstance.post('',post);

export {createComments}