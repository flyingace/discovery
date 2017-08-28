import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { trim } from 'lodash';

class AppActions extends React.Component {

    static propTypes = {
        fetchVideo: PropTypes.func
    };

    onSearchClick = () => {
        this.searchInput.value = trim(this.searchInput.value);

        if (this.searchInput.value !== '') {
            this.props.fetchVideo(this.searchInput.value);
        } else {
            window.alert ('Please enter a term to search by.');
        }
    };

    render() {
        return (
            // TODO: If you have time, validate entry isn't empty or just spaces
            <Form inline>
                <FormControl
                    componentClass="input"
                    placeholder="Search For Videos"
                    inputRef={(ref) => {this.searchInput = ref}}
                    // defaultValue="Dogs"
                />
                <Button onClick={this.onSearchClick}>Search Videos</Button>
            </Form>
        );
    }
}

export default AppActions;