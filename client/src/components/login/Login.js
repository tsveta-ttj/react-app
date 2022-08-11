import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as userService from '../../services/userService';
export const Login = () => {

    const { storeUserCredentials } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        userService.login(email, password)
            .then(authData => {
                if (authData.message) {
                    throw new Error(authData.message);
                }
                storeUserCredentials(authData);
                navigate('/');
            })
            .catch(err => {
                console.log(err);

            });
    };
    return (

        <form id="login" onSubmit={onSubmit}>
            <div className="form-container">
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="maria@gmail.com"
                />
                <label htmlFor="login-pass">Password:</label>
                <input type="password" id="login-password" name="password" />
                <button type="submit" >Login</button>
                <p className="field">
                    <span>
                        If you don't have profile click <Link to="/register">here</Link>
                    </span>
                </p>


            </div>
        </form>

    );

};