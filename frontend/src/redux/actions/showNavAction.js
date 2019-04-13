import {SHOW_NAV} from "./types.js";

export const showNav = (showMenu) => dispatch => {
    dispatch({
        type: SHOW_NAV,
        payload: showMenu
    });
};

