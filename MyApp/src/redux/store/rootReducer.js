import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import postReduser from '../reducers/postSlice';


const rootReducer = combineReducers({
    user: userReducer,
    posts: postReduser,
 
});

export default rootReducer;