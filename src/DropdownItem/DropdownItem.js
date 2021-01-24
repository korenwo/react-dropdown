import React from 'react';
import './DropdownItem.css';

function DropdownItem (props) {
    return (
        <div className={'Item'}>
            {props.children}
        </div>
    );
}

export default DropdownItem;
