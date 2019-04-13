import {SHOW_MODAL} from "./types.js";

export const modalAnimation = (modalAnimation) => dispatch => {
    dispatch({
        type: SHOW_MODAL,
        payload: modalAnimation
    });
};

