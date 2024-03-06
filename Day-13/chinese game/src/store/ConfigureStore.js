import { combineReducers, createStore } from "redux";
import chineseGameReducer from "./ChineseGame";
import loginReducer from "./LoginReducer";


const store = createStore(combineReducers({
    login:loginReducer,
    game:chineseGameReducer
}));



export default store;