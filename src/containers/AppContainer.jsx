import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import App from '../App';
import * as SearchFieldActions from '../actions/SearchFieldActions';

function mapStateToProps(state) {
    return {
        app: state.app
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(SearchFieldActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
