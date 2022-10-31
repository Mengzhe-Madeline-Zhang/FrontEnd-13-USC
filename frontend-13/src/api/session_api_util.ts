import axios from 'axios';

export const signup = (userData:{username: string; password: string}) => {
    return axios.post('localhost:8080/signup', userData)
}

export const login = (userData:{username: string; password: string}) => {
    return axios.post('localhost:8080/login',userData)
}