import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as userService from '../../services/userService';

export const Register = () => {
    const {userRegister} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        const email = formData.get('email');
        const username = formData.get('username');
        const password = formData.get('password');
        const repass = formData.get('repass');

        if(password !== repass){
            throw new Error('Password and Confirm Password do not match');
        }

        userService.register(email, username, password)
            .then(authData => {
                if(authData.message){
                    throw new Error(authData.message);
                }
                userRegister(authData);
                navigate('/')
            })
            .catch(err =>{
                console.log(err);
            });
    }

    return (

        <form id="register" onSubmit={onLogin}>
            <div className="form-container">
                <h1>Register</h1>
                
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="maria@mail.com"
                />

                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Mims"
                />

                <label htmlFor="pass">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    id="register-password" />

                <label htmlFor="repass">Confirm Password:</label>
                <input type="password" name="repass" id="repass" />
                
                <button type="submit" >Register</button>

                <p className="field">
                    <span>
                        If you already have profile click <Link to="/login">here</Link>
                    </span>
                </p>
            </div>
        </form>
    );

};