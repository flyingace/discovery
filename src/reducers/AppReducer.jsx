import {
    CLEAR_FORM_DATA,
    RECEIVE_VIDEO_DATA,
    REQUEST_VIDEO_DATA,
    UPDATE_CURRENT_VIDEO
} from '../actions/AppActions';
import { assign } from 'lodash';

const initialState = {
    videoData: {},
    currentVideo: {}
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
    case CLEAR_FORM_DATA:
        break;
    case RECEIVE_VIDEO_DATA:
        state = assign({}, state, {
            videoData: action.state
        });
        break;
    case REQUEST_VIDEO_DATA:
        break;
    case UPDATE_CURRENT_VIDEO:
        state = assign({}, state, {
            currentVideo: action.state
        });
        break;
    default:
        return state;
    }

    return state;
}
