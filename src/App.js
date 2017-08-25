import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import PlayerContainer from './components/PlayerContainer';
import SearchField from './components/SearchField';
import SortingMenu from './components/SortingMenu';
import VideoList from './components/VideoList';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="main_wrapper">
                <PlayerContainer/>
                <SearchField/>
                <SortingMenu/>
                <VideoList/>
            </div>
        );
    }
}

export default App;
