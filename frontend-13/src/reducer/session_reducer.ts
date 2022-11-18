import { RECEIVE_CURRENT_USER, RECEIVE_LOGIN_ERROR } from "../actions/session_actions";

const sessionReducer = (state = {}, action:{type:string; payload:any}) => {
    Object.freeze(state);
    let newState:any = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState['user'] = action.payload.success;
            return newState;
        case RECEIVE_LOGIN_ERROR:
            newState['loginError'] = true;
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;