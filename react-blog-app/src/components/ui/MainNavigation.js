import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

function MainNavigation() {
    return (
        <div className={classes.mainNav}>
            <nav>
                <ul>
                    <Link to='/'>Home</Link>
                    <Link to='/about-us'>About us</Link>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavigation;