import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { shoeReducer } from "./reducer/shoeReducer";

export const store = createStore(shoeReducer, composeWithDevTools());
