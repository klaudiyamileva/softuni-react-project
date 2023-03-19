import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import * as blogService from '../../services/blogService';
import { useEffect, useState } from 'react';
import { BlogsList } from './BlogsList';

export const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        blogService.getBlogs()
            .then(result => {
                setBlogs(result);
            });
    }, []);

    return (
        <>
            <Link className={styles.more} to="/blog/add">
                Add Your Blog
            </Link>
            <div className={styles.container}>
                <h2>Latest News &amp; Articles</h2>
                <div className={styles.carousel}>
                    {blogs.length > 0
                        ? blogs.map(b => <BlogsList key={b._id} blog={b} />)
                        : <p>No blogs yet.</p>}
                </div>
            </div>
        </>
    );
};