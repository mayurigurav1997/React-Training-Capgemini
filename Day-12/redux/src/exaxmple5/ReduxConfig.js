import {createStore, combineReducers} from 'redux';

//step1 - actions - unique collection of certain actions to identify which state to modify
const actionTypes = {
    INCREASE_CNT:"INCREASE_CNT",
    DECREASE_CNT:"DECREASE_CNT",
    MODIFY_DEFAULT:"MODIFY_DEFAULT",
    RESET_CNT:"RESET_CNT"
}


//step2 -  reducer function : used to implement only state change for a component
const initial_state = {
    value:100,
    default_id:5
};

let counterReducer = (state = initial_state, action) => {
    const {type, payload} = action;

    if(type==actionTypes.INCREASE_CNT)
    {
        return {...state, value:state.value+state.default_id};
    }
    else if(type==actionTypes.DECREASE_CNT)
    {
        return {...state, value:state.value-state.default_id};
    }
    else if(type=="MODIFY_DEFAULT")
    {
        return {...state, default_id:payload};
    }else if(type=="RESET_CNT")
    {
        return {value:0, default_id:1};
    }

    
    return state;
}

let test1Reducer = (state = {}, action) => { return state; }

let test2Reducer = (state = {}, action) => { return state; }

//step3 - define store : used to configure reducer for all components at one place and provide global store
const store = createStore(combineReducers({
    counter:counterReducer,
    test1:test1Reducer,
    test2:test2Reducer
}));

export default store;



/* 
Note
1) change in state of any component will re-render complete component. 
2) reducer is maintaining state of component and is responsible to modify, reset state created
3) to implement redux in react application, you required to install following two libraries
   a) react-redux       b) redux
*/