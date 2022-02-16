import './RegistrationForm.scss';
import Button from '../constant/Button';
import { useState } from 'react';

export default function RegistrationForm () {
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const payload = {
        name,
        lastName,
        username,
        email,
        password
    }
    
    function handleForm(e) {
        e.preventDefault();

        console.log(payload);

        //create payload

        //fetch call to BE 
    }

    return (
        <form className="reg-form" onSubmit={handleForm}>
            <div className="reg-form__input-grp">
                <label className="reg-form__label" htmlFor="first-name">First name:</label>
                <input id="first-name" className="reg-form__input" type="text" required onChange={e => setName(e.target.value)}/>
            </div>
            <div className="reg-form__input-grp">
                <label className="reg-form__label" htmlFor="last-name" >Last name:</label>
                <input id="last-name" className="reg-form__input" type="text" required onChange={e => setLastName(e.target.value)}/>
            </div>
            <div className="reg-form__input-grp">
                <label className="reg-form__label" htmlFor="username">Username:</label>
                <input id="username" className="reg-form__input" type="text" required  onChange={e => setUserName(e.target.value)}/>
            </div>
            <div className="reg-form__input-grp">
                <label className="reg-form__label" htmlFor="email">Email:</label>
                <input id="email" className="reg-form__input" type="email" required  onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="reg-form__input-grp">
                <label className="reg-form__label" htmlFor="password">Password:</label>
                <input id="password" className="reg-form__input" type="password" required  onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="reg-form__input-grp ">
                <Button type="submit" text="Submit" />
            </div>
        </form>
    )
}