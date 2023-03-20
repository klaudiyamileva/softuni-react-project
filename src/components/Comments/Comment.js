import styles from '../Blog/Blog.module.css';

export const Comment = ({
    comment
}) => {
    return (
        <div className={styles.comment}>
            <div>
                <div className={styles.cardcomment}>
                    <div className={styles.bodycomment}>
                        <h5>
                            {comment.fullName} <br />
                            <span> {comment.user.email} </span>
                        </h5>
                        <p className={styles.text}>
                            {comment.comment}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};