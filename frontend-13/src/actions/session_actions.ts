import * as sessionUtil from '../api/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_USER_LOGIN = 'RECEIVE_USER_LOGIN';
export const RECEIVE_USER_LOGOUT = 'RECEIVE_USER_LOGOUT';

export const receiveCurrentUser = (currentUser:any) => ({
    type: RECEIVE_CURRENT_USER,
    payload: currentUser
});

export const receiveUserLogin = () => ({
    type:RECEIVE_USER_LOGIN
});

export const receiveUserLogout = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const login = (user:{username:string; password:string;}) => (dispatch:any) => {
    return sessionUtil.login(user).then(userData => dispatch(receiveCurrentUser(userData))) //chain .catch later when error handling is added
}


//add logout later