import React from 'react';
import PropTypes from 'prop-types';

class VideoList extends React.Component {
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

    render() {
        return (
            <div className="video_list">
                <ul>
                    <li>Video List</li>
                </ul>
            </div>
        );
    }
}

export default VideoList;