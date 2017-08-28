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
        window.scrollTo(0,0);
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
                        <img src={item.snippet.thumbnails.default.url} alt={`Thumbnail: ${item.snippet.title}`}
                             className="video-thumbnail"/>
                        <span className="video-description">{item.snippet.description}</span>
                        <span className="video-added-date">Published On: {item.snippet.publishedAt}</span>
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