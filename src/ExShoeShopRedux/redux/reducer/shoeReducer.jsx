import { shoeArr } from "../../data";
const initState = {
    ffff: shoeArr,
};

export const shoeReducer = (state = initState, action) => {
    switch (action.type) {
        // case value:
        //     return state;

        default:
            return state;
    }
};
