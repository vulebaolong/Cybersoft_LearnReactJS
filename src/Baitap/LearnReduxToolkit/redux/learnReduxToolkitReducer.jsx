import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cart: [],
    shoeArr: [],
    viewDetail: {},
};

const learnReduxToolkitReducer = createSlice({
    name: "shopReducer",
    initialState,
    reducers: {
        getAllProductAction: (state, { type, payload }) => {
            state.shoeArr = payload;
        },
        addToCart: (state, { type, payload }) => {
            let shoe = payload;
            const { cart } = state;
            // item
            shoe = { ...shoe, num: 1 };

            //tìm kiếm
            const index = cart.findIndex((item) => item.name === shoe.name);

            //1 nếu trùng
            if (index !== -1) cart[index].num++;

            //2 trùng
            if (index === -1) cart.push(shoe);
        },
        viewDetailAction: (state, { type, payload }) => {
            state.viewDetail = payload;
        },
        deleteToCartAction: (state, { type, payload }) => {
            const { cart } = state;
            const shoe = payload;
            state.cart = cart.filter((item) => item.name !== shoe.name);
        },
        changeNumAction: (state, { type, payload }) => {
            const { shoe, option } = payload;
            const { cart } = state;
            const index = cart.findIndex((item) => item.name === shoe.name);
            cart[index].num += option;
            if (cart[index].num === 0) cart.splice(index, 1);
            state.cart = cart;
        },
    },
});

export const {
    getAllProductAction,
    addToCart,
    viewDetailAction,
    deleteToCartAction,
    changeNumAction,
} = learnReduxToolkitReducer.actions;

export default learnReduxToolkitReducer.reducer;

// -------------------action thunk ------------------
// getAllProduct
export const getAllProduct = () => {
    return async (dispatch, getState) => {
        try {
            const { data, status } = await axios.get(
                "https://shop.cyberlearn.vn/api/Product"
            );
            console.log("getAllProduct - ", data);
            dispatch(getAllProductAction(data.content));
        } catch (error) {
            console.log(error);
        }
    };
};
