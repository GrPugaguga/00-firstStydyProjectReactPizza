import React from 'react'
import "./header.css"
import HeaderButtonIcons from './headerComponents/headerRight/headerButtonIcons'

const Header = () => {
    return (
        <div className="header" >
            <div className="headerLeft" >
                <a className='headerLeftLogo'>
                </a>
                <div className='headerLeftInfo'>
                </div>
            </div>
            <div className="headerRight">
                <HeaderButtonIcons />


            </div>
        </div>
    )
}

export default Header
