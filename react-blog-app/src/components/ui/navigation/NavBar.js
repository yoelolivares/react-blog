
import './NavBar.scss';
import MobileMainNav from './MobileMainNavigation';
import MainNav from './MainNav';
import NavLogo from './NavLogo';

function NavBar() {
    return (
        <div className="nav-bar full-column">
            <NavLogo />
            <MainNav />
            <MobileMainNav />
        </div>
    )
}

export default NavBar;