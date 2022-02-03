import './NavLogo.scss';
import { Link } from 'react-router-dom';

function NavLogo() {
    return ( 
        <div className='nav-logo__container'>
            <Link to='/'>
                <img src="#" alt="testing" />
            </Link>
        </div>
    )
}

export default NavLogo;