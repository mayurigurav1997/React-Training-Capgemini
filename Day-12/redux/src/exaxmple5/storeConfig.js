import {createStore, combineReducers} from 'redux';
import {counterReducer, test1Reducer, test2Reducer  } from './ReduxConfig'

//step3 - define store : used to configure reducer for all components at one place and provide global store
const store = createStore(combineReducers({
    counter:counterReducer,
    test1:test1Reducer,
    test2:test2Reducer
}));

export default store;