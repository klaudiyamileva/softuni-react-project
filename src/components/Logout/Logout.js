import { useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import * as authService from '../../services/authService';

export const Logout = () => {
    const navigate = useNavigate();
    const { auth, userLogout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(auth.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    });

    return null;
};