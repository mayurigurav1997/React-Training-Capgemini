import {actionTypes} from './ActionTypes';

/* 
Note
1) change in state of any component will re-render complete component. 
2) reducer is maintaining state of component and is responsible to modify, reset state created
3) to implement redux in react application, you required to install following two libraries
   a) react-redux       b) redux
*/

//step2 -  reducer function : used to implement only state change for a component
const initial_state = {
    value:100,
    default_id:5
};

export let counterReducer = (state = initial_state, action) => {
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

export let test1Reducer = (state = {}, action) => { return state; }

export let test2Reducer = (state = {}, action) => { return state; }





