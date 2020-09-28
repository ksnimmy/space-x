import { combineReducers } from 'redux';
import programReducer from './programReducer';
import filterReducer from './filterReducer';

export default combineReducers({
    missions: programReducer,
    filter: filterReducer
});