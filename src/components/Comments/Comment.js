import styles from '../Blog/Blog.module.css';

export const Comment = ({
    comment
}) => {
    return (
        <div className={styles.comment}>
                <div className={styles.cardcomment}>
                    <div>
                        <h5>
                            {comment.fullName} <br />
                        </h5>
                            <span> {comment.user.email} </span>
                        <p className={styles.text}>
                            {comment.comment}
                        </p>
                    </div>
                </div>
        </div>
    );
};