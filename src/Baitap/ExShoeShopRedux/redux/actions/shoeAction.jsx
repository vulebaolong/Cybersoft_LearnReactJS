import { ADD_CART, CHANGE_NUM, DELETE_CART, VIEW_DETAIL } from "../constant/shoeConstant";

export const viewDetailAction = (shoe) => {
    return {
        type: VIEW_DETAIL,
        payload: shoe,
    };
};

export const addToCartAction = (shoe) => {
    return {
        type: ADD_CART,
        payload: shoe,
    };
};

export const deleteAction = (shoe) => {
    return {
        type: DELETE_CART,
        payload: shoe,
    };
};

export const changeNumAction = (shoe, option) => {
    return {
        type: CHANGE_NUM,
        payload: { shoe, option },
    };
};
