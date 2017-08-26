import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class Player extends React.Component {
    constructor() {
        super();
    };

    static propTypes = {};

    static defaultProps = {};

    state = {};

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        return (
            <YouTube
                videoId="2g811Eo7K8U"
                onReady={this._onReady}
            />
        );
    }
}

export default Player;