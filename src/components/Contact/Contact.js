import styles from './Contact.module.css';
import * as contactService from '../../services/contactService';
import { useNavigate } from 'react-router-dom';


export const Contact = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        contactService.contact(formData)
            .then(() => {
                navigate('/');
            });
    };

    return (
        <form onSubmit={onSubmit} className={styles.col} id="contact">
            <h4> Contact Us </h4>
            <input type="text" name="fullName" className={styles.form} placeholder="Full Name" />
            <input type="email" name="email" className={styles.form} placeholder="Email Address" />
            <textarea name="message" className={styles.form} placeholder="Message" />
            <input type="submit" className={styles.more} value="SENT" />
        </form>
    );
};