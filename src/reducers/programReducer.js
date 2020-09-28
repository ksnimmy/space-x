import { FETCH_MISSIONS } from '../actions/actionTypes';

export default (state= [], action) => {
    switch(action.type){
        case FETCH_MISSIONS:
            return action.payload.data;
        default:
            return state;
    }
};