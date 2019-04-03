import {combineReducers}from 'redux';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import EndpointReducer from './EnpointReducer';
import DisplayReducer from './DisplayReducer';

export default combineReducers({
    posts:PostReducer,
    requests:EndpointReducer,
    user:UserReducer,
    endpoint: DisplayReducer
})
