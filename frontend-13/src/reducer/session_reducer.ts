import { receiveCurrentUser, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = {id:null}, action:{type:string; payload:any}) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {user:action.payload}
        default:
            return state;
    }
}

export default sessionReducer;