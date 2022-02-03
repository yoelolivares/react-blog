import { Link } from 'react-router-dom';

function NavLinkList () {
    return <ul>
        <Link to='/'>Home</Link>
        <Link to='/about-us'>About us</Link>
        <Link to='/about-us'>test 1</Link>
        <Link to='/about-us'>test 2</Link>
        <Link to='/about-us'>test 3</Link>
        <Link to='/about-us'>test 4</Link>
    </ul>
}

export default NavLinkList;