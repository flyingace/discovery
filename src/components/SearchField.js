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

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <Form inline>
                <FormControl/>
                <Button onClick={() => { this.props.fetchVideo('monkeys') }}>Search Videos</Button>
            </Form>
        );
    }
}

export default SearchFieldActions;