
import NavBar from "../components/ui/navigation/NavBar";
import Card from '../components/ui/card/Card';
import '../general.scss';

function Homepage() {
    return (
        <div className="default-column">
            <NavBar />
            <h1>Home page</h1>
            <div className="centered-column">
                <Card />
            </div>
            
            
        </div>
    )
}
export default Homepage;