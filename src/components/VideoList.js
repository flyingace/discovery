import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class VideoList extends React.Component {

    static propTypes = {
        videoData: PropTypes.object
    };

    onListItemClicked = (item) => {
        const selectedVideo = {
            videoId: item.id.videoId,
            videoTitle: item.snippet.title
        };
        this.props.selectVideo(selectedVideo);
    };

    renderGroupItems = () => {
        return this.props.videoData.items &&
            this.props.videoData.items.map((item, idx) => {
                return (
                    <ListGroupItem header={item.snippet.title}
                                   key={'vid' + idx.toString()}
                                   onClick={() => {
                                       this.onListItemClicked(item)
                                   }}>
                        <img src={item.snippet.thumbnails.default.url} alt='Video Thumbnail'/>
                        {item.snippet.description}
                    </ListGroupItem>
                )
            })
    };

    render() {
        return (
            <ListGroup>
                {this.renderGroupItems()}
            </ListGroup>
        );
    }
}

export default VideoList;