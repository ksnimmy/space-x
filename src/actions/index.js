import axios from 'axios';
import { FETCH_MISSIONS, UPDATE_FILTER } from './actionTypes';
import { CONSTANTS } from '../helpers/constants';

export const fetchMissions = (criteria) => {
    return async (dispatch) => {
        let res;
        if (!criteria) {
            res = await axios.get(CONSTANTS.BASE_API_URL);
        }
        else {
            const _params = {
                launch_success: criteria.launch,
                land_success: criteria.landing,
                launch_year: criteria.launchYear
            };
            res = await axios.get(CONSTANTS.BASE_API_URL, { params: _params });
        }

        dispatch({
            type: FETCH_MISSIONS,
            payload: res
        });
    }
}

export const updateLaunchYear = (criteria) => {
    return {
        type: UPDATE_FILTER,
        payload: criteria
    };
}