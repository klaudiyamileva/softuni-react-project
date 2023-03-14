import styles from './Contact.module.css';

export const Contact = () => {
    return (
        <form className={styles.col} id="contact">
            <h4> Contact Us </h4>
            <input type="text" className={styles.form} placeholder="Full Name" />
            <input type="email" className={styles.form} placeholder="Email Address" />
            <textarea className={styles.form} placeholder="Message" defaultValue="" />
            <input type="submit" className={styles.more} defaultValue="SENT" />
        </form>
    );
};