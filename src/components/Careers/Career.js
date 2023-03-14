import styles from './Career.module.css';

export const Career = () => {
    return (
        <>
            <div className={styles.blog}>
                <img className={styles.img} src="/styles/images/news1.jpg" alt="" />
                <h2 className={styles.title}>Aenean ultrices lorem quis blandit tempor urabitur accumsan.</h2>
                <p className={styles.content}>Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat</p>
            </div>

            <form className={styles.col} id="contact">
                <h4> Apply </h4>
                <input type="text" className={styles.form} placeholder="Full Name" />
                <input type="email" className={styles.form} placeholder="Email" />
                <input type="submit" className={styles.more} value="Apply" />
            </form>
        </>
    );
};