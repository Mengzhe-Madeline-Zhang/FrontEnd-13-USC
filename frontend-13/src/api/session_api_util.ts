import axios from 'axios';

export const signup = (userData:{username: string; password: string}) => {

    return axios({
        method: 'post',
        data: userData,
        url: 'http://localhost:8080/users/'
    })
}

export const login = (userData:{username: string; password: string}) => {

    return axios({
        method: 'post',
        // headers: { "Access-Control-Allow-Origin" : '*'},
        data: userData,
        url: 'http://localhost:8080/login/'
    })
}