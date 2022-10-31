import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from '../reducer/root_reducer';

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger))
}

export default configureStore;