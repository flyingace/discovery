import {
    CLEAR_FORM_DATA,
    RECEIVE_VIDEO_DATA,
    REQUEST_VIDEO_DATA,
    UPDATE_CURRENT_VIDEO,
    SORT_VIDEOS
} from '../actions/AppActions';
import { assign, isUndefined } from 'lodash';

const initialState = {
    videoData: {},
    currentVideo: {}
};

function sortVideosByCriteria(state, criteria) {
    const videoList = state.videoData;
    const sortedVideoList = {};
    let sortedItems;

    if (isUndefined(criteria)) {
        return videoList;
    }

    //TODO: Refactor so this is more compact and re-usable
    switch (criteria) {
    case 'titleAsc':
        sortedItems = videoList.items.sort(function (a, b) {
            let first = a.snippet.title.toLowerCase(),
                second = b.snippet.title.toLowerCase();

            return first.localeCompare(second);
        });
        break;
    case 'titleDsc':
        sortedItems = videoList.items.sort(function (a, b) {
            let first = a.snippet.title.toLowerCase(),
                second = b.snippet.title.toLowerCase();

            return second.localeCompare(first);
        });
        break;
    case 'newest':
        sortedItems = videoList.items.sort(function (a, b) {
            let first = a.snippet.publishedAt,
                second = b.snippet.publishedAt;

            return second.localeCompare(first);
        });
        break;
    case 'oldest':
        sortedItems = videoList.items.sort(function (a, b) {
            let first = a.snippet.publishedAt,
                second = b.snippet.publishedAt;

            return first.localeCompare(second);
        });
        break;
    default:
        break;
    }

    sortedVideoList.items = sortedItems;
    return sortedVideoList;
}

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

    case SORT_VIDEOS:
        const sortedVideos = sortVideosByCriteria(state, action.state);

        state = assign({}, state, {
            videoData: sortedVideos
        });
        break;

    default:
        return state;
    }

    return state;
}
