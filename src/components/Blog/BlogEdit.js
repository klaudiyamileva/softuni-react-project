import { useNavigate, useParams } from 'react-router-dom';
import styles from './BlogAdd.module.css';
import * as blogService from '../../services/blogService';
import { useEffect, useState } from 'react';

export const BlogEdit = () => {
    const [blog, setBlog] = useState({});
    const { blogId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        blogService.getBlogById(blogId)
            .then(result => {
                setBlog(result);
            });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        blogService.editBlog(blogId, formData)
            .then(() => {
                navigate(`/blog/${blogId}`);
            });
    };

    return (
        <form onSubmit={onSubmit} className={styles.col} id="contact">
            <h4> Edit our Blog </h4>
            <input type="text" name="imageUrl" className={styles.form} defaultValue={blog.imageUrl} />
            <input type="text" name="title" className={styles.form} defaultValue={blog.title} />
            <textarea name="content" className={styles.form} defaultValue={blog.content} />
            <input type="submit" className={styles.more} value="Edit" />
        </form>
    );
};