import { Link, useParams } from 'react-router-dom';
import styles from './Blog.module.css';
import * as blogService from '../../services/blogService';
import * as commentsService from '../../services/commentsService';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Comment } from '../Comments/Comment';

export const Blog = () => {
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);
    const [isOwner, setIsOwner] = useState(false);
    const { blogId } = useParams();
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        blogService.getBlogById(blogId)
            .then(result => {
                setBlog(result);
                if (result._ownerId === auth._id) {
                    setIsOwner(true);
                };
            });

        commentsService.getByBlogId(blogId)
            .then(result => {
                setComments(result);
            });
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));
        formData = {...formData, blogId};

        commentsService.createComment(formData)
            .then(result => {
                setComments(state => [...state, result]);
            });
    };

    return (
        <div>
            <div className={styles.blog}>
                <img className={styles.img} src={blog.imageUrl} alt="" />
                <p className={styles.creator}>From: {blog._ownerId}</p>
                <h2 className={styles.title}>{blog.title}</h2>
                <p className={styles.content}>{blog.content}</p>
            </div>

            {isOwner &&
                <div className={styles['more-wrapper']}>
                    <Link to='/blog/edit' className={styles.more}>Edit</Link>
                    <Link to='' className={styles.more}>Delete</Link>
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
                    <input type="text" name="fullName" className={styles.form} placeholder="Full Name" />
                    <input type="email" name="email" className={styles.form} placeholder="Email" />
                    <textarea name="comment" className={styles.form} placeholder="Comment" />
                    <input type="submit" className={styles.more} value="SENT" />
                </form>
                : <p className={styles.text}>
                    If you want to add a comment <Link to='/login'>Log In here</Link>
                </p>}
        </div>
    );
};