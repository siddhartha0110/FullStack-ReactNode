import { FETCH_SURVEYS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SURVEYS:
            console.log("SURVEY FETCHED COMPLETED");
            return action.payload
        default:
            return state;
    }
} 