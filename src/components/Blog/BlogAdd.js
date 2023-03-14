import styles from './BlogAdd.module.css';

export const BlogAdd = () => {
    return (
        <form className={styles.col} id="contact">
            <h4> Add our Blog </h4>
            <input type="text" className={styles.form} placeholder="ImageUrl..." />
            <input type="text" className={styles.form} placeholder="Title..." />
            <textarea className={styles.form} placeholder="Message" defaultValue="" />
            <input type="submit" className={styles.more} value="Add" />
        </form>
    );
};