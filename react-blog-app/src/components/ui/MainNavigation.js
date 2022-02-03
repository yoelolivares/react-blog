
import classes from './MainNavigation.module.scss';
import MobileMainNav from './MobileMainNavigation';
import NavLinkList from './NavLinkList';

function MainNavigation() {
    return (
        <div className={classes.mainNav}>
            <nav>
                <NavLinkList />
            </nav>
            <MobileMainNav />
            <div>
                
            </div>
        </div>
    )
}

export default MainNavigation;