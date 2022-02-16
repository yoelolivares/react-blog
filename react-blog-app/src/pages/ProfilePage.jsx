import NavBar from "../components/ui/navigation/NavBar";
import '../general.scss';

function ProfilePage(props) {
    const ph = {
        firstName: 'john',
        lastName: 'Doe',
        username: 'Weon',
        email: 'johnDoe@gmail.com',
        password: 'ps123'
    }
    
    return (
        <div className="default-column">
            <NavBar />
            <div className="centered-column">
                <h1>Welcome: Username placholder</h1>
            </div>
            <div className="centered-column">
                <div className="display-test">
                    <p>username: {ph.firstName}</p>
                    <p>first name: {ph.lastName}</p>
                    <p>last name: {ph.username}</p>
                    <p>email: {ph.email}</p>
                    <p>password: {ph.password}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;