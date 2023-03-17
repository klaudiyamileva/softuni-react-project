import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export const Blog = () => {
    return (
        <div>
            <div className={styles.blog}>
                <img className={styles.img} src="/styles/images/news1.jpg" alt="" />
                <p className={styles.creator}>From: Blog's Creator</p>
                <h2 className={styles.title}>Aenean ultrices lorem quis blandit tempor urabitur accumsan.</h2>
                <p className={styles.content}>Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat</p>
            </div>

            <div className={styles['more-wrapper']}>
                <Link to='/blog/edit' className={styles.more}>Edit</Link>
                <Link to='' className={styles.more}>Delete</Link>
            </div>

            <div className={styles.comments}>
                <h2>Comments</h2>
                <div className={styles.comment}>
                    <div>
                        <div className={styles.cardcomment}>
                            <div className={styles.bodycomment}>
                                <h5>
                                    Lisa Gally <br />
                                    <span> lisa@abv.bg </span>
                                </h5>
                                <p className={styles.text}>
                                    “ Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat ”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <form className={styles.col} id="contact">
                <h4> Add Your Comment </h4>
                <input type="text" className={styles.form} placeholder="Full Name" />
                <input type="email" className={styles.form} placeholder="Email" />
                <textarea className={styles.form} placeholder="Comment" />
                <input type="submit" className={styles.more} value="SENT" />
            </form>
        </div>
    );
};