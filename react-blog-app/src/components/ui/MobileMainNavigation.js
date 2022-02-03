
import classes from './MobileMainNavigation.module.scss'
import NavLinkList from './NavLinkList'

function MobileMainNav(params) {
    const drawerContainer = document.querySelector('.drawer');

    function toggleMenu(e) {
        e.preventDefault();

    }

    return (
        <div className={classes.main_nav_mobile}>
            <button className={classes.btn} onClick={toggleMenu}>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
                <span className={classes.bar}></span>
            </button>
            <div className={classes.drawer}>
                <NavLinkList />
            </div>
        </div>
    )
}
export default MobileMainNav