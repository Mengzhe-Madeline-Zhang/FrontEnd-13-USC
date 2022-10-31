import { RECEIVE_CURRENT_USER, RECEIVE_NEW_USER } from "../actions/session_actions";

const sessionReducer = (state = {}, action:{type:string; payload:any}) => {
    Object.freeze(state);
    let newState:any = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {user:action.payload};
        case RECEIVE_NEW_USER:
            newState[action.payload.username] = action.payload;
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;