import React, { useState } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';
import Button from '../ui/constant/Button';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }

    return (
        <div className="login-wrapper">
            <h1>Please log in</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-grp">
                    <label className="login__label" htmlFor="username">Username:</label>
                    <input id="username" type="text" onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="input-grp">
                    <label className="login__label" htmlFor="user-password">Password:</label>
                    <input id="user-password" type="password" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="input-grp login__btn-wrapper">
                    <Button type={'submit'} text={'Submit'} iconName="BsChat" />
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}