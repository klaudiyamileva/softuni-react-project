import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export const BlogList = () => {
    return (
        <>
            <Link className={styles.more} to="/blog/add">
                Add Your Blog
            </Link>
            <div className={styles.container}>
                <h2>Latest News &amp; Articles</h2>
                <div className={styles.carousel}>
                    <div className={styles.card}>
                        <img className={styles.img} src="/styles/images/news1.jpg" alt="" />
                        <div className={`${styles.body} text-left pr-0 pl-0`}>
                            <h5>Aenean ultrices lorem quis blandit tempor urabitur accumsan.</h5>
                            <Link className={styles.more} to="/blog/:id">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};