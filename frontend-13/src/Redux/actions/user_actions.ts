import * as sessionUtil from '../../api/session_api_util';
export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const RECEIVE_SIGNUP_ERROR = 'RECEIVE_SIGNUP_ERROR';


export const receiveNewUser = () => ({
    type: RECEIVE_NEW_USER,
    payload: 'SUCCESS'
});

export const receiveRegistrationError = (err:any) => ({
    type: RECEIVE_SIGNUP_ERROR,
    payload: err
})

export const signup = (user: {username: string; password: string;}) => (dispatch:any) => {
    return sessionUtil.signup(user)
    .then(() => (dispatch(receiveNewUser())))
    .catch((err:any) => (dispatch(receiveRegistrationError(err))))
}
