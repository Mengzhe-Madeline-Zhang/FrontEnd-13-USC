import {connect} from 'react-redux';
import { login } from '../../Redux/actions/session_actions';
import { signup } from '../../Redux/actions/user_actions';
import SessionForm from './session_form'

const mSTP = (state:any) => {
    return {
        currentUser: state.session.user,
        signUpStatus: state.users.signUpStatus,
        loginError: state.session.loginError,
        registerError: state.users.signUpError
    }
}

const mDTP = (dispatch:any) => {
    return {
        login: (user:{username:string, password:string}) => dispatch(login(user)), 
        signUp: (user: {username:string, password:string}) => dispatch(signup(user))
    }
}


export default connect(mSTP,mDTP)(SessionForm);


