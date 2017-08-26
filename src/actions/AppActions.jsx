import fetch from 'isomorphic-fetch'

export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA';
export const RECEIVE_VIDEO_DATA = 'RECEIVE_VIDEO_DATA';
export const REQUEST_VIDEO_DATA = 'REQUEST_VIDEO_DATA';
export const UPDATE_CURRENT_VIDEO ='UPDATE_CURRENT_VIDEO';

const YOUTUBE_API_KEY = 'AIzaSyBoA6fC1ggRO-OljowB-MVF2GjCNYJmeRE';

//Video
export function fetchVideoData(searchTerm) {
    return (dispatch) => {
        dispatch(requestVideoData());

        const youTubeAPIURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${YOUTUBE_API_KEY}`;

        return fetch(youTubeAPIURL)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            ).then(json =>

                dispatch(receiveVideoData(json))
            )
    }
}

export function requestVideoData() {
    return { type: REQUEST_VIDEO_DATA };
}

export function receiveVideoData(data) {
    return { type: RECEIVE_VIDEO_DATA, state: data };
}

export function clearFormOnSubmit() {
    return { type: CLEAR_FORM_DATA };
}

export function updateCurrentVideo(data) {
    return { type: UPDATE_CURRENT_VIDEO, state: data }
}

