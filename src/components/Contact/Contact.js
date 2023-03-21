import styles from './Contact.module.css';
import * as contactService from '../../services/contactService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export const Contact = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!formData.fullName) {
            errors.fullName = 'Full name is required';
            valid = false;
        }

        if (!formData.email) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email format';
            valid = false;
        }

        if (!formData.message) {
            errors.message = 'Message is required';
            valid = false;
        }
        
        setFormErrors(errors);

        return valid;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            contactService.contact(formData)
                .then(() => {
                    navigate('/');
                });
        };
    };

    const handleChange = (e) => {
        setFormData((state) => (
            { ...state, [e.target.name]: e.target.value }
        ));
    }

    return (
        <form onSubmit={onSubmit} className={styles.col} id="contact">
            <h4> Contact Us </h4>
            <input
                type="text"
                name="fullName"
                className={styles.form}
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
            />
            {formErrors.fullName && <div className="error">{formErrors.fullName}</div>}
            <input
                type="email"
                name="email"
                className={styles.form}
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
            />
            {formErrors.email && <div className="error">{formErrors.email}</div>}
            <textarea
                name="message"
                className={styles.form}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
            />
            {formErrors.message && <div className="error">{formErrors.message}</div>}
            <input type="submit" className={styles.more} value="SENT" />
        </form>
    );
};