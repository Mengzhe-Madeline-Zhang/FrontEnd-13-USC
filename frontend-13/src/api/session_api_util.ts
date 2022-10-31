import axios from 'axios';

export const signup = (userData:{username: string; password: string}) => {
    return axios.post('/api/signup', userData)
}

export const login = (userData:{username: string; password: string}) => {
    return axios.post('/api/login',userData)
}