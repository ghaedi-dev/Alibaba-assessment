import axios from 'axios';

export const { source } = axios.CancelToken;
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
});

export default instance;