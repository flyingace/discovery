import {
    CLEAR_FORM_DATA,
    RECEIVE_VIDEO_DATA,
    REQUEST_VIDEO_DATA
} from '../actions/SearchFieldActions';
import { assign } from 'lodash';

const initialState = {
    // currentDescription: ''
};


export default function searchFieldReducer(state = initialState, action) {
    switch (action.type) {
    case CLEAR_FORM_DATA:
        break;
    case RECEIVE_VIDEO_DATA:
        break;
    case REQUEST_VIDEO_DATA:
        break;

        // state = assign({}, state, {
        //     currentDescription: action.state
        // });
        // break;
        //
    default:
        return state;
    }

    return state;
}
