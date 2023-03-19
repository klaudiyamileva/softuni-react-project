import styles from './BlogAdd.module.css';
import * as blogService from '../../services/blogService';
import { useNavigate } from 'react-router-dom';

export const BlogAdd = () => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        blogService.createBlog(formData)
            .then(() => {
                console.log('post');
                navigate('/blog');
            });
    };

    return (
        <form onSubmit={onSubmit} className={styles.col} id="contact">
            <h4> Add Your Blog </h4>
            <input type="text" name="imageUrl" className={styles.form} placeholder="ImageUrl..." />
            <input type="text" name="title" className={styles.form} placeholder="Title..." />
            <textarea name="content" className={styles.form} placeholder="Content..." />
            <input type="submit" className={styles.more} value="Add" />
        </form>
    );
};