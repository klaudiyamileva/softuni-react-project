import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export const BlogsList = ({
    blog
}) => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={blog.imageUrl} alt="" />
            <div className={`${styles.body} text-left pr-0 pl-0`}>
                <h5>{blog.title}</h5>
                <Link className={styles.more} to={`/blog/${blog._id}`}>
                    Read More
                </Link>
            </div>
        </div>
    );
};