import { data } from "../../asset/data";

const initialState = {
    movies: data,
    selectChair: [],
};
export const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_CHAIR": {
            const copyState = JSON.parse(JSON.stringify(state));
            const index = copyState.selectChair.findIndex(
                (itemSelect) => itemSelect.soGhe === payload.soGhe
            );
            if (index !== -1) {
                copyState.selectChair = copyState.selectChair.filter(
                    (item) => item.soGhe !== payload.soGhe
                );
            }
            if (index === -1) {
                if (!payload.daDat) copyState.selectChair.push(payload);
            }
            return copyState;
        }

        case "DELETE_CHAIR": {
            const copyState = JSON.parse(JSON.stringify(state));
            // console.log(payload);
            copyState.selectChair = copyState.selectChair.filter(
                (item) => item.soGhe !== payload.soGhe
            );
            return copyState;
        }

        default:
            return state;
    }
};
