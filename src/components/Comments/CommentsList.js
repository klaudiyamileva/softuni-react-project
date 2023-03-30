import { useContext, useEffect, useState } from "react";
import { Comment } from './Comment';
import { AddComment } from './AddComment';
import { AuthContext } from "../../contexts/AuthContext";
import * as commentsService from '../../services/commentsService';
import { Link, useParams } from "react-router-dom";
import styles from '../Blog/Blog.module.css';

export const CommentsList = () => {
    const [comments, setComments] = useState([]);
    const { auth } = useContext(AuthContext);
    const { blogId } = useParams();

    useEffect(() => {
        commentsService.getByBlogId(blogId)
            .then(result => {
                setComments(result);
            });
    }, []);

    const createCommentHandler = (newComment) => {
        commentsService.createComment(newComment)
            .then(() => {
                commentsService.getByBlogId(blogId)
                    .then(result => {
                        setComments(result);
                    });
            });
    };

    return (
        <>
            <div className={styles.comments}>
                <h2>Comments</h2>
                {comments.length > 0
                    ? comments.map(c => <Comment key={c._id} comment={c} />)
                    : <p className={styles.text}>No comments yet</p>
                }
            </div>

            {
                auth.accessToken
                    ? <AddComment onCreateComment={createCommentHandler} />
                    : <p className={styles.text}>
                        If you want to add a comment or like <Link to='/login'>Log In here</Link>
                    </p>
            }
        </>
    );
};