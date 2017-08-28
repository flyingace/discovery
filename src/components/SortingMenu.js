import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class SortingMenu extends React.Component {

    static propTypes = {
        sortVideoData: PropTypes.func
    };


    onSortSelect = (criteria) => {
        this.props.sortVideoData(criteria);
    };

    render() {
        //TODO: Some logic could be added to disable the button if there are no videos to sort
        return (
            <DropdownButton title="Sort by..." id="sort-by" pullRight onSelect={this.onSortSelect}>
                <MenuItem eventKey={'titleAsc'}>Title (A-Z)</MenuItem>
                <MenuItem eventKey={'titleDsc'}>Title (Z-A)</MenuItem>
                <MenuItem eventKey={'newest'}>Newest First</MenuItem>
                <MenuItem eventKey={'oldest'}>Oldest First</MenuItem>
            </DropdownButton>
        );
    }
}

export default SortingMenu;