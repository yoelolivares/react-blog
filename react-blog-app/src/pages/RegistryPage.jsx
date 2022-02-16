import NavBar from "../components/ui/navigation/NavBar";
import RegistrationForm from "../components/ui/Registration/RegistrationForm";
import '../general.scss';

function RegistryPage() {
    return (
        <div className="default-column">
            <NavBar />
            <div className="centered-column">
                <h1>Please register your information:</h1>
            </div>
            <div className="centered-column">
                <RegistrationForm />
            </div>
            
        </div>
    )
}
export default RegistryPage;