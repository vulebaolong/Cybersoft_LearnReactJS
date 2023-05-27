import { combineReducers } from "redux";

// các reducer con
import { numberReducer } from "./numberReducer";

export const rootReducer = combineReducers({ numberReducer });
