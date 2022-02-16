import './LoginButton.scss';
import { Link } from "react-router-dom";

export default function LoginButton() {
    return (
        <div className="login-container">
            <Link className="button" to="/registry">Log in / Sign up</Link>
        </div>
    )
}