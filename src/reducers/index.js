import { combineReducers } from 'redux';
import SignInReducer from './signInReducer';
import CreateAccountReducer from './createAccountReducer';

export default combineReducers({
    SignInReducer, CreateAccountReducer
});