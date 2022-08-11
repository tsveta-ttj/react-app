import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import * as userService from '../../services/userService';

export const Logout = () => {
    const navigate = useNavigate();
    const { user, clearUserCredentials } = useContext(AuthContext);
    
    useEffect(() => {
        userService.logout(user.accessToken)
            .then(() => {
                clearUserCredentials();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });



    return null;
}
