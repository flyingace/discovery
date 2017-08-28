import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Player from './components/Player';
import SearchField from './components/SearchField';
import SortingMenu from './components/SortingMenu';
import VideoList from './components/VideoList';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="main-wrapper">
                <Player videoId={this.props.currentVideo.videoId} videoTitle={this.props.currentVideo.videoTitle}/>
                <div className='form-elements'>
                    <SearchField fetchVideo={this.props.fetchVideoData}/>
                    <SortingMenu sortVideoData = {this.props.sortVideos} />
                </div>
                <VideoList videoData={this.props.videoData} selectVideo={this.props.updateCurrentVideo}/>
            </div>
        );
    }
}

export default App;
