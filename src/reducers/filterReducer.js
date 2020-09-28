import { UPDATE_FILTER } from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            return action.payload;
        default:
            return state;
    }
};