import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

class SearchField extends React.Component {
    constructor() {
        super();
    };

    static propTypes = {};

    static defaultProps = {};

    state = {};

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Form inline>
                <FormControl/>
                <Button>Search Videos</Button>
            </Form>
        );
    }
}

export default SearchField;