import styles from './Login.module.css';

export const Login = () => {
    return (
        <form className={styles.col} id="contact">
            <h4> Log In </h4>
            <input type="email" className={styles.form} placeholder="Email..." />
            <input type="password" className={styles.form} placeholder="Password..." />
            <input type="submit" className={styles.more} value="Login" />
        </form>
    );
};