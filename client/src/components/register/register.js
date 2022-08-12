import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from '../../services/userService';

export const Register = () => {
    const { storeUserCredentials } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const repass = formData.get('repass');

        if (password !== repass) {
            throw new Error('Password and Confirm Password do not match');
        }

        userService.register(email, username, password)
            .then(authData => {
                if (authData.message) {
                    throw new Error(authData.message);
                }
                storeUserCredentials(authData);
                navigate('/')
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (

        <div className="form-container">
            <form id="register" className="form" onSubmit={onLogin}>
                <h1>Register</h1>

                <label className='label' htmlFor="email">Email:</label>
                <input
                    className='inputFields'
                    type="email"
                    id="email"
                    name="email"
                    placeholder="maria@mail.com"
                />

                <label className='label' htmlFor="username">Username:</label>
                <input
                    className='inputFields'
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Mims"
                />

                <label className='label' htmlFor="pass">Password:</label>
                <input
                    className='inputFields'
                    type="password"
                    name="password"
                    id="register-password" />

                <label className='label' htmlFor="repass">Confirm Password:</label>
                <input className='inputFields' type="password" name="repass" id="repass" />

                <button className='button' type="submit" >Register</button>

                <p className="field">
                    <span>
                        If you already have profile click <Link to="/login" className='accent'>here</Link>
                    </span>
                </p>
            </form>
        </div>
    );

};