import React, { useContext } from 'react';
import './DropdownButton.css';
import { Context } from '../Dropdown/Dropdown.js';

export default function DropdownButton(props) {

    const { setShowMenu, showMenu } = useContext(Context);

    return (
        <div className={'button'}>
            <button onClick={() => setShowMenu(!showMenu)}>
                {props.children}
            </button>
        </div>

    )

}



