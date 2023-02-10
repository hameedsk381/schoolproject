import { combineReducers } from "redux";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllUsersReducer } from "./reducers/userReducer";
import { registerUserReducer } from "./reducers/userReducer";
import { loginUserReducer } from "./reducers/userReducer";
const finalReducer = combineReducers({getAllUsersReducer:getAllUsersReducer,loginUserReducer:loginUserReducer,registerUserReducer:registerUserReducer})
const currentUser = localStorage.getItem("currentUser")? JSON.parse(localStorage.getItem("currentUser")):null;
const initialState = {loginUserReducer:{currentUser:currentUser}}
const composeEnchancers = composeWithDevTools({});
const store = createStore(finalReducer,initialState,composeEnchancers(applyMiddleware(thunk)));
export default store;
