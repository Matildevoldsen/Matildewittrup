import {SHOW_MODAL} from "../actions/types";

const initialState = {
    modalAnimation: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                modalAnimation: action.payload
            };
        default:
            return state;
    }
}