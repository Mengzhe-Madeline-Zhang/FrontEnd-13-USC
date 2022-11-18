import { RECEIVE_NEW_USER } from "../actions/user_actions";

const usersReducer = (state = {test:{username:'test', password:'test'}}, action:{type:string; payload:any}) => {
    Object.freeze(state);
    let newState:any = Object.assign({},state);
    switch(action.type) {
        case RECEIVE_NEW_USER:
            newState['SignUpStatus'] = action.payload;
            return newState;
        default:
            return state;
    }
}

export default usersReducer;