import {connect} from 'react-redux';
import { login } from '../../actions/session_actions';
import { signup } from '../../actions/user_actions';
import SessionForm from './session_form'

const mSTP = (state:any) => {
    return {
        currentUser: state.session.user,
        users: state.users,
        testState: state
    }
}

const mDTP = (dispatch:any) => {
    return {
        login: (user:{username:string; password:string}) => dispatch(login(user)), 
        signUp: (user: {username:string; password:string;}) => dispatch(signup(user))
    }
}


export default connect(mSTP,mDTP)(SessionForm);
