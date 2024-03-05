import { combineReducers, createStore } from "redux";
import loginReducer from "./LoginReducer";


const store = createStore(combineReducers({
    login:loginReducer
}));



export default store;