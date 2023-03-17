import styles from './Register.module.css';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const repass = formData.get('confirm-password');

        if(password !== repass) {
            return;
        };

        authService.register(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/');
            });
    };

    return (
        <>
            <form onSubmit={onSubmit} className={styles.col} id="contact">
                <h4> Register </h4>
                <input type="email" name="email" className={styles.form} placeholder="Email..." />
                <input type="password" name="password" className={styles.form} placeholder="Password..." />
                <input type="password" name="confirm-password" className={styles.form} placeholder="Repeat Password..." />
                <input type="submit" className={styles.more} value="Register" />
            </form>
            <p>If you don't have an account <Link to={'/login'}>click here</Link></p>
        </>
    );
};