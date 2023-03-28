import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './Blog.module.css';
import * as blogService from '../../services/blogService';
import { useEffect, useRef, useState } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { CommentsList } from '../Comments/CommentsList';
import { Likes } from '../Likes/Likes';

export const Blog = () => {
    const [blog, setBlog] = useState({});
    const [isOwner, setIsOwner] = useState(false);
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
    }, []);

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

    return (
        <div>
            <div className={styles.blog}>
                <img className={styles.img} src={blog.imageUrl} alt="" />
                <p className={styles.creator}>From: {creator.current}</p>
                <h2 className={styles.title}>{blog.title}</h2>
                <p className={styles.content}>{blog.content}</p>
            </div>

            {isOwner && <div className={styles['more-wrapper']}>
                    <Link to={`/blog/${blog._id}/edit`} className={styles.more}>Edit</Link>
                    <button onClick={onDeleteClick} className={styles.more}>Delete</button>
                </div>
            }
            <Likes isOwner={isOwner}/>
            <CommentsList />
        </div>
    );
};