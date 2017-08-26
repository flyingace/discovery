import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../App';
import * as AppActions from '../actions/AppActions';

function mapStateToProps(state) {
    return {
        videoData: state.AppReducer.videoData,
        currentVideo: state.AppReducer.currentVideo
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
