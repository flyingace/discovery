import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AppActions extends React.Component {

    static propTypes = {
        fetchVideo: PropTypes.func
    };

    onSearchClick = () => {
        this.props.fetchVideo(this.searchInput.value);
    };

    render() {
        return (
            <Form inline>
                <FormControl
                    componentClass="input"
                    placeholder="Search For Videos"
                    inputRef={(ref) => {this.searchInput = ref}}
                    defaultValue="Dogs"
                    //TODO: If you have time, validate entry isn't empty
                />
                <Button onClick={this.onSearchClick}>Search Videos</Button>
            </Form>
        );
    }
}

export default AppActions;