import {combineReducers}from 'redux';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import EndpointsReducer from './EndpointsReducer';


export default combineReducers({
    posts:PostReducer,
    user:UserReducer,
    endpoint: EndpointsReducer
})