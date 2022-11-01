export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';


export const receiveNewUser = (user:{username:string,password:string}) => ({
    type: RECEIVE_NEW_USER,
    payload: user
});

export const testSignUp = (user:{username:string; password:string}) => (dispatch:any) => {
    return dispatch(receiveNewUser(user));
}