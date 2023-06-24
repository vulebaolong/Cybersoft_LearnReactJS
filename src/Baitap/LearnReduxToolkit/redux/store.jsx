import { configureStore } from "@reduxjs/toolkit";
import learnReduxToolkitReducer from "./learnReduxToolkitReducer";

export const store = configureStore({
    reducer: {
        learnReduxToolkitReducer: learnReduxToolkitReducer,
    },
});
