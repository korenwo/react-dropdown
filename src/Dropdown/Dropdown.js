import React, { useState, createContext } from 'react'
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import DropdownButton from '../DropdownButton/DropdownButton';
export const Context = createContext();

export default function Dropdown(props) {
    const [showMenu, setShowMenu] = useState(false)
    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <Context.Provider value={{
            showMenu,
            setShowMenu
        }}>
                {props.children}
        </Context.Provider>
    )
}

