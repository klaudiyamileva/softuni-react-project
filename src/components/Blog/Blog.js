import { Link, useParams } from 'react-router-dom';
import styles from './Blog.module.css';
import * as blogService from '../../services/blogService';
import { useEffect, useState } from 'react';

export const Blog = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        blogService.getBlogById(blogId)
            .then(result => {
                setBlog(result);
            });
    }, [blogId]);

    return (
        <div>
            <div className={styles.blog}>
                <img className={styles.img} src={blog.imageUrl} alt="" />
                <p className={styles.creator}>From: {blog._ownerId}</p>
                <h2 className={styles.title}>{blog.title}</h2>
                <p className={styles.content}>{blog.content}</p>
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