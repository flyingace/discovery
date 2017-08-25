import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class SortingMenu extends React.Component {
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
            <DropdownButton title="Sort by..." id="sort-by">
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Newest First</MenuItem>
                <MenuItem>Oldest First</MenuItem>
                <MenuItem>Title</MenuItem>
            </DropdownButton>
        );
    }
}

export default SortingMenu;