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
        console.log(this.props.fetchVideoData);
        return (
            <div className="main_wrapper">
                <Player/>
                <SearchField fetchVideo={this.props.fetchVideoData}/>
                <SortingMenu/>
                <VideoList/>
            </div>
        );
    }
}

export default App;


