import { Link } from 'react-router-dom';

function NavLinkList () {
    return <ul>
        <li><Link to='/'>Home<span className='link-bar'></span></Link></li>
        <li><Link to='/about-us'>About us<span className='link-bar'></span></Link></li>
        <li><Link to='/about-us'>test 1<span className='link-bar'></span></Link></li>
        <li><Link to='/about-us'>test 2<span className='link-bar'></span></Link></li>
        <li><Link to='/about-us'>test 3<span className='link-bar'></span></Link></li>
        <li><Link to='/about-us'>test 4<span className='link-bar'></span></Link></li>
    </ul>
}

export default NavLinkList;