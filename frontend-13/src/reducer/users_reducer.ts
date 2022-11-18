import { RECEIVE_NEW_USER, RECEIVE_SIGNUP_ERROR } from "../actions/user_actions";

const usersReducer = (state = {test:{username:'test', password:'test'}}, action:{type:string; payload:any}) => {
    Object.freeze(state);
    let newState:any = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_NEW_USER:
            newState['signUpStatus'] = action.payload;
            return newState;
        case RECEIVE_SIGNUP_ERROR:
            newState['signUpError'] = true;
            return newState;
        default:
            return state;
    }
}

export default usersReducer;