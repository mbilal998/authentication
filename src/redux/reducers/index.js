import { combineReducers } from 'redux';
import signup_reducer from './signup';
import login_reducer from './login';

const rootReducers = combineReducers({
    signup_main: signup_reducer,
    login_main: login_reducer
});

export default rootReducers;
