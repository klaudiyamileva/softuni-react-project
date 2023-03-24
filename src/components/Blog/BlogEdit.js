import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './BlogAdd.module.css';
import * as blogService from '../../services/blogService';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const BlogEdit = () => {
    const { blogId } = useParams();
    const navigate = useNavigate();
    const { auth } = useContext(AuthContext);

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

    useEffect(() => {
        blogService.getBlogById(blogId)
            .then(result => {
                setBlog(result);
            });
    }, []);

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

        if (validateForm()) {
            blogService.editBlog(blogId, blog)
                .then(() => {
                    navigate(`/blog/${blogId}`);
                });
        }

    };

    const handleChange = (e) => {
        setBlog((state) => (
            { ...state, [e.target.name]: e.target.value }
        ));
    };

    if (auth._id !== blog._ownerId) {
        return (
            <>
                <p>You do not have permission to edit this blog.</p>
                <Link to='/blog'>Go back to blogs</Link>
            </>
        );
    }

    return (
        <form onSubmit={onSubmit} className={styles.col} id="contact">
            <h4> Edit our Blog </h4>
            <input
                type="text"
                name="imageUrl"
                className={styles.form}
                value={blog.imageUrl}
                onChange={handleChange}
            />
            {formErrors.imageUrl && <div className="error">{formErrors.imageUrl}</div>}
            <input
                type="text"
                name="title"
                className={styles.form}
                value={blog.title}
                onChange={handleChange}
            />
            {formErrors.title && <div className="error">{formErrors.title}</div>}
            <textarea
                name="content"
                className={styles.form}
                value={blog.content}
                onChange={handleChange}
            />
            {formErrors.content && <div className="error">{formErrors.content}</div>}
            <input type="submit" className={styles.more} value="Edit" />
        </form>
    );
};