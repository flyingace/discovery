import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SearchFieldActions extends React.Component {
    constructor() {
        super();
    };

    static propTypes = {
        fetchVideo: PropTypes.func
    };

    static defaultProps = {};

    state = {};

    onSearchClick = () => {
        this.props.fetchVideo(this.searchInput.value);
    };

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Form inline>
                <FormControl
                    componentClass="input"
                    placeholder="Search For Videos"
                    inputRef={(ref) => {this.searchInput = ref}}
                    //TODO: If you have time, validate entry isn't empty
                />
                <Button onClick={this.onSearchClick}>Search Videos</Button>
            </Form>
        );
    }
}

export default SearchFieldActions;