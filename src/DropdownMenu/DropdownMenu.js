import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../Dropdown/Dropdown';

export default function DropdownMenu(props) {
    const { showMenu } = useContext(Context)


    return (
        <div>
            {showMenu &&
                <div>
                    {props.children}
                </div>}
        </div>



    )
}