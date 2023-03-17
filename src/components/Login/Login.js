import styles from './Login.module.css';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/login');
            });
    };
    return (
        <>
            <form onSubmit={onSubmit} className={styles.col} id="contact">
                <h4> Log In </h4>
                <input type="email" name="email" className={styles.form} placeholder="Email..." />
                <input type="password" name="password" className={styles.form} placeholder="Password..." />
                <input type="submit" className={styles.more} value="Login" />
            </form>
            <p>If you don't have an account <Link to={'/register'}>click here</Link></p>
        </>
    );
};