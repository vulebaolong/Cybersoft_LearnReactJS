import { combineReducers } from "redux";
import { shoeReducer } from "./shoeReducer";

let objectReducer = {
    abc: shoeReducer,
};
export const rootReducer = combineReducers(objectReducer);
