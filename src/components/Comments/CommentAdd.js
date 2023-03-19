import styles from '../Blog/Blog.module.css';
import * as commentsService from '../../services/commentsService';
import { useNavigate } from 'react-router-dom';

export const CommentAdd = ({
    blogId
}) => {
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = Object.fromEntries(new FormData(e.target));
        formData = {...formData, blogId};

        commentsService.createComment(formData)
            .then(() => {
                navigate(`/blog/${blogId}`)
            });
    };

    return (
        <form onSubmit={onSubmit} className={styles.col} id="contact">
            <h4> Add Your Comment </h4>
            <input type="text" name="fullName" className={styles.form} placeholder="Full Name" />
            <input type="email" name="email" className={styles.form} placeholder="Email" />
            <textarea name="comment" className={styles.form} placeholder="Comment" />
            <input type="submit" className={styles.more} value="SENT" />
        </form>
    );
};