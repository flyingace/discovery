import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const SortingMenu = (props) => {
    return (
        <DropdownButton title="Sort by..." id="sort-by" pullRight onSelect={props.sortVideoData}>
            <MenuItem eventKey={'titleAsc'}>Title (A-Z)</MenuItem>
            <MenuItem eventKey={'titleDsc'}>Title (Z-A)</MenuItem>
            <MenuItem eventKey={'newest'}>Newest First</MenuItem>
            <MenuItem eventKey={'oldest'}>Oldest First</MenuItem>
        </DropdownButton>
    )
};

export default SortingMenu;