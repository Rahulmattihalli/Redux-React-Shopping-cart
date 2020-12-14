import { createStore,applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import { FetchReducer } from './reducer/reducer';

const composeEnhancer = compose;
const initialstate={};
const store = createStore(combineReducers({
    products:FetchReducer
}),initialstate,composeEnhancer(applyMiddleware(thunk)));

export default store;