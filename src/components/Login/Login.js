import styles from './Login.module.css';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!formData.email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
            valid = false;
        }

        if (!formData.password) {
            errors.password = 'Password is required';
            valid = false;
        } else if (formData.password.length < 5) {
            errors.password = 'Password must be at least 5 characters long';
            valid = false;
        }

        setFormErrors(errors);

        return valid;
    };


    const onSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            authService.login(formData.email, formData.password)
                .then(authData => {
                    userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/login');
                });
        };
    };

    const handleChange = (e) => {
        setFormData((state) => (
            { ...state, [e.target.name]: e.target.value }
        ));
    };

    return (
        <>
            <form onSubmit={onSubmit} className={styles.col} id="contact">
                <h4> Log In </h4>
                <input
                    type="email"
                    name="email"
                    className={styles.form}
                    placeholder="Email..."
                    value={formData.email}
                    onChange={handleChange}
                />
                {formErrors.email && <div className="error">{formErrors.email}</div>}
                <input
                    type="password"
                    name="password"
                    className={styles.form}
                    placeholder="Password..."
                    value={formData.password}
                    onChange={handleChange}
                />
                {formErrors.password && <div className="error">{formErrors.password}</div>}
                <input type="submit" className={styles.more} value="Login" />
            </form>
            <p>If you don't have an account <Link to={'/register'}>click here</Link></p>
        </>
    );
};