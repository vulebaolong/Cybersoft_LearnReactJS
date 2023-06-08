import { combineReducers } from "redux";
import { numberReducer } from "../Baitap/DemoMiniRedux/redux/reducer/numberReducer";
import { shoeReducer } from "../Baitap/ExShoeShopRedux/redux/reducer/shoeReducer";
import { movieReducer } from "../Baitap/VeXemPhim/redux/reducers/movieReducer";
export const rootReducer = combineReducers({
    DemoMiniRedux: numberReducer,
    ExShoeShopRedux: shoeReducer,
    VeXemPhim: movieReducer,
});
