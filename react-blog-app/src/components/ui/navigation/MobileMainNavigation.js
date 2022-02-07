import './MobileMainNavigation.scss'
import NavLinkList from './NavLinkList'

import { useState } from 'react';
import LoginButton from '../login/LoginButton';

function MobileMainNav() {
    const [isActive, setActive] = useState('false');
    let btnClass = 'main-nav-mobile__btn';
    let drawerClass = 'main-nav-mobile__drawer';

    const toggleMenu = () => {
        setActive(!isActive);
    }


    if (isActive) {
        btnClass = `${btnClass} active`;
        drawerClass = `${drawerClass} fadeIn`;
    } else {
        drawerClass = `${drawerClass} fadeOut`;
    }

    return (
        <div className="main-nav-mobile">
            <button className={btnClass} onClick={toggleMenu}>
                <span className="main-nav-mobile__bar-container">
                    <span className="main-nav-mobile__bar"></span>
                    <span className="main-nav-mobile__bar"></span>
                    <span className="main-nav-mobile__bar"></span>
                </span>  
            </button>
            <div className={drawerClass}>
                <NavLinkList />
                <LoginButton />
            </div>

        </div>
    )
}
export default MobileMainNav