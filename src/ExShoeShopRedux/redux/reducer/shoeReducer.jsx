import { shoeArr } from "../../data";
import { ADD_CART, CHANGE_NUM, DELETE_CART, VIEW_DETAIL } from "./constant/shoeConstant";
const initState = {
    shoeArr,
    viewDetail: shoeArr[0],
    cart: [],
};

export const shoeReducer = (state = initState, action) => {
    switch (action.type) {
        case VIEW_DETAIL: {
            return JSON.parse(JSON.stringify({ ...state, viewDetail: action.payload }));
        }

        case ADD_CART: {
            const shoe = action.payload;
            // item
            const itemShoe = { ...shoe, num: 1 };

            //clone cart
            const cloneCart = [...state.cart];

            const index = cloneCart.findIndex((item) => {
                return item.name === itemShoe.name;
            });

            //1 nếu trùng
            if (index !== -1) cloneCart[index].num++;

            //2 trùng
            if (index === -1) cloneCart.push(itemShoe);
            return JSON.parse(JSON.stringify({ ...state, cart: cloneCart }));
        }

        case CHANGE_NUM: {
            const { shoe, option } = action.payload;
            const cloneCart = [...state.cart];
            const index = cloneCart.findIndex((item) => {
                return item.name === shoe.name;
            });
            cloneCart[index].num += option;
            if (cloneCart[index].num === 0) {
                cloneCart.splice(index, 1);
            }
            return JSON.parse(JSON.stringify({ ...state, cart: cloneCart }));
        }

        case DELETE_CART: {
            const shoe = action.payload;
            const cloneCart = [...state.cart];
            const index = cloneCart.findIndex((item) => {
                return item.name === shoe.name;
            });
            cloneCart.splice(index, 1);
            return JSON.parse(JSON.stringify({ ...state, cart: cloneCart }));
        }

        default:
            return state;
    }
};
