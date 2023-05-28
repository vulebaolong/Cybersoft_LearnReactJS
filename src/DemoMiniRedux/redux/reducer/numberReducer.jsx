import { TANG } from "../constant/numberConstant";

const initState = {
    number: 1,
};

export const numberReducer = (state = initState, action) => {
    switch (action.type) {
        case TANG:
            console.log(initState);
            state.number += action.payload;
            return { ...state };

        default:
            return state;
    }
};
