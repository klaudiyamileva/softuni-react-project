import styles from './Register.module.css';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/authService';

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
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

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password';
            valid = false;
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            valid = false;
        }

        setFormErrors(errors);

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            authService
                .register(formData.email, formData.password)
                .then((authData) => {
                    userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/register');
                });
        };
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.col} id="contact">
                <h4>Register</h4>
                <div>
                    <input
                        type="email"
                        name="email"
                        className={styles.form}
                        placeholder="Email..."
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formErrors.email && <div className="error">{formErrors.email}</div>}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        className={styles.form}
                        placeholder="Password..."
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {formErrors.password && <div className="error">{formErrors.password}</div>}
                </div>
                <div>
                    <input
                        type="password"
                        name="confirmPassword"
                        className={styles.form}
                        placeholder="Repeat Password..."
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {formErrors.confirmPassword && <div className="error">{formErrors.confirmPassword}</div>}
                </div>
                <input type="submit" className={styles.more} value="Register" />
            </form>
            <p>
                If you don't have an account <Link to={'/login'}>click here</Link>
            </p>
        </>
    );
};