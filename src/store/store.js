import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import  authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer,
});

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);