import NavLinkList from "./NavLinkList";
import '../navigation/MainNav.scss';
import LoginButton from "../login/LoginButton";

function MainNav() {
    return (
        <nav className="main-nav">
            <NavLinkList />
            <LoginButton />
        </nav>
    )
} 

export default MainNav;