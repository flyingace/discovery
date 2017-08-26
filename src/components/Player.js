import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class Player extends React.Component {

    static propTypes = {
        videoId: PropTypes.string,
        videoTitle: PropTypes.string
    };

    static defaultProps = {
        videoId: '2g811Eo7K8U',
        videoTitle: 'Video Title'
    };

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        return (
            <div className='player'>
                <div className='video-container'>
                    <YouTube
                        videoId={this.props.videoId}
                        onReady={this._onReady}
                    />
                </div>
                <h2>{this.props.videoTitle}</h2>
            </div>
        );
    }
}

export default Player;