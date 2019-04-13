import {SHOW_NAV, CHANGE_NAV} from "../actions/types";

const initialState = {
    menu: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_NAV:
            return {
                ...state,
                menu: action.payload
            };
        default:
            return state;
    }
}