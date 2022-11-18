import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = {}, action:{type:string; payload:any}) => {
    Object.freeze(state);
    let newState:any = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            newState['sessionId'] = action.payload;
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;