import sessionReducer from './session_reducer';
import usersReducer from './users_reducer';
import { combineReducers } from 'redux';
import cart from '../Redux/cart.slice';
import products from '../Redux/product.slice';
import showCart from '../Redux/showcart.slice';

const rootReducer = (combineReducers({
    session:sessionReducer,
    users: usersReducer,
    cart,
    products,
    showCart,
}));
export default rootReducer;