import {connect} from 'react-redux';
import { login, testSignUp } from '../../actions/session_actions';
import SessionForm from './session_form'

const mSTP = (state:any) => {
    return {
        currentUser: state.user,
        users: state.session
    }
}

const mDTP = (dispatch:any) => {
    return {
        login: (user:{username:string; password:string}) => dispatch(login(user)), 
        testSignUp: (user:{username:string; password:string}) => dispatch(testSignUp(user))
    }
}


export default connect(mSTP,mDTP)(SessionForm);
