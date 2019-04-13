import {combineReducers} from "redux";
import navReducer from './navReducer.js';
import modalReducer from './modalRecuer.js';

export default combineReducers({
    nav: navReducer,
    modal: modalReducer
});
