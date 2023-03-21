import styles from './BlogAdd.module.css';
import * as blogService from '../../services/blogService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const BlogAdd = () => {
    const navigate = useNavigate();

    const [blog, setBlog] = useState({
        imageUrl: '',
        title: '',
        content: '',
    });

    const [formErrors, setFormErrors] = useState({
        imageUrl: '',
        title: '',
        content: '',
    });

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!blog.imageUrl) {
            errors.imageUrl = 'Image URL is required';
            valid = false;
        }

        if (!blog.title) {
            errors.title = 'Title is required';
            valid = false;
        }

        if (!blog.content) {
            errors.content = 'Content is required';
            valid = false;
        }

        setFormErrors(errors);

        return valid;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            blogService.createBlog(blog)
                .then(() => {
                    navigate('/blog');
                });
        };
    };

    const handleChange = (e) => {
        setBlog((state) => (
            { ...state, [e.target.name]: e.target.value }
        ));
    };

    return (
        <form onSubmit={onSubmit} className={styles.col} id="contact">
            <h4> Add Your Blog </h4>
            <input
                type="text"
                name="imageUrl"
                className={styles.form}
                placeholder="ImageUrl..."
                value={blog.imageUrl}
                onChange={handleChange}
            />
            {formErrors.imageUrl && <div className="error">{formErrors.imageUrl}</div>}
            <input
                type="text"
                name="title"
                className={styles.form}
                placeholder="Title..."
                value={blog.title}
                onChange={handleChange}
            />
            {formErrors.title && <div className="error">{formErrors.title}</div>}
            <textarea
                name="content"
                className={styles.form}
                placeholder="Content..."
                value={blog.content}
                onChange={handleChange}
            />
            {formErrors.content && <div className="error">{formErrors.content}</div>}
            <input type="submit" className={styles.more} value="Add" />
        </form>
    );
};