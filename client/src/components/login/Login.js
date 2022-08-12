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
                navigate('/catalog');
            })
            .catch(err => {
                console.log(err);

            });
    };
    return (

        <div className="form-container">
            <form id="login" className="form" onSubmit={onSubmit}>
                <h1>Login</h1>
                <label className='label' htmlFor="email">Email:</label>
                <input
                    className='inputFields'
                    type="email"
                    id="email"
                    name="email"
                    placeholder="maria@gmail.com"
                />
                <label className='label' htmlFor="login-pass">Password:</label>
                <input className='inputFields' type="password" id="login-password" name="password" />
                <button className='button' type="submit" >Login</button>
                <p className="field">
                    <span>
                        If you don't have profile click <Link className='accent' to="/register">here</Link>
                    </span>
                </p>
            </form>
        </div>

    );

};