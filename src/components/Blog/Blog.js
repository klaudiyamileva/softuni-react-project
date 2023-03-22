import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Blog.module.css';
import * as blogService from '../../services/blogService';
import * as commentsService from '../../services/commentsService';
import { useEffect, useRef, useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Comment } from '../Comments/Comment';

export const Blog = () => {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [isOwner, setIsOwner] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        comment: ''
    });
    const [formErrors, setFormErrors] = useState({
        fullName: '',
        comment: ''
    });
    const { blogId } = useParams();
    const { auth } = useContext(AuthContext);
    const creator = useRef('');
    const navigate = useNavigate();

    useEffect(() => {
        blogService.getBlogById(blogId)
            .then(result => {
                setBlog(result);
                creator.current = result.user.email;
                if (result._ownerId === auth._id) {
                    setIsOwner(true);
                };
            });

        commentsService.getByBlogId(blogId)
            .then(result => {
                setComments(result);
            });
    }, []);

    const validateForm = () => {
        let valid = true;
        const errors = {};

        if (!formData.fullName) {
            errors.fullName = 'Full name is required';
            valid = false;
        }

        if (!formData.comment) {
            errors.comment = 'Comment is required';
            valid = false;
        }

        setFormErrors(errors);

        return valid;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newComment = { ...formData, blogId };

            commentsService.createComment(newComment)
                .then(() => {
                    commentsService.getByBlogId(blogId)
                        .then(result => {
                            setComments(result);
                        });
                });

            setFormData({
                fullName: '',
                comment: ''
            });
        }
    };

    const onDeleteClick = (e) => {
        e.preventDefault();

        const confirmation = window.confirm('Are you sure you want to delete this blog?');

        if (confirmation) {
            blogService.deleteBlog(blogId)
                .then(() => {
                    navigate('/blog');
                });
        };
    };

    const handleChange = (e) => {
        setFormData((state) => (
            { ...state, [e.target.name]: e.target.value }
        ));
    }

    return (
        <div>
            <div className={styles.blog}>
                <img className={styles.img} src={blog.imageUrl} alt="" />
                <p className={styles.creator}>From: {creator.current}</p>
                <h2 className={styles.title}>{blog.title}</h2>
                <p className={styles.content}>{blog.content}</p>
            </div>

            {isOwner &&
                <div className={styles['more-wrapper']}>
                    <Link to={`/blog/${blog._id}/edit`} className={styles.more}>Edit</Link>
                    <button onClick={onDeleteClick} className={styles.more}>Delete</button>
                </div>
            }

            <div className={styles.comments}>
                <h2>Comments</h2>
                {comments.length > 0
                    ? comments.map(c => <Comment key={c._id} comment={c} />)
                    : <p>No comments yet</p>
                }
            </div>

            {auth.accessToken
                ? <form onSubmit={onSubmit} className={styles.col} id="contact">
                    <h4> Add Your Comment </h4>
                    <input
                        type="text"
                        name="fullName"
                        className={styles.form}
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {formErrors.fullName && <div className="error">{formErrors.fullName}</div>}
                    <textarea
                        name="comment"
                        className={styles.form}
                        placeholder="Comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                    {formErrors.comment && <div className="error">{formErrors.comment}</div>}
                    <input type="submit" className={styles.more} value="SENT" />
                </form>
                : <p className={styles.text}>
                    If you want to add a comment <Link to='/login'>Log In here</Link>
                </p>}
        </div>
    );
};