import styles from './Register.module.css';

export const Register = () => {
    return (
        <form className={styles.col} id="contact">
            <h4> Register </h4>
            <input type="email" className={styles.form} placeholder="Email..." />
            <input type="password" className={styles.form} placeholder="Password..." />
            <input type="submit" className={styles.more} value="Register" />
        </form>
    );
};