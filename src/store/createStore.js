/* eslint-disable import/no-anonymous-default-export */
import {createStore , combineReducers , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import expenceReducer from '../reducers/expences';
import filterReducer from '../reducers/filter';
import authReducer from '../reducers/auth';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expences:expenceReducer,
            filters:filterReducer,
            auth:authReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}

