import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./Profile.module.css";
import * as blogService from "../../services/blogService";
import { Link } from "react-router-dom";
import { BlogsList } from "../Blog/BlogsList";

export const Profile = () => {
    const [blogs, setBlogs] = useState([]);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        blogService.getBlogByOwnerId(auth._id)
            .then(result => {
                setBlogs(result);
            });
    }, []);

    return (
        <div>
            <h4>MY PROFILE</h4>
            <p className={styles.centered}>Email</p>
            <div className={styles.profile}>
                <p className={styles.email}>{auth.email}</p>
            </div>
            <div className={styles.profile}>
                <Link className={styles.more} to="/blog/add">
                    Add Your Blog
                </Link>
            </div>
            <p className={styles.centered}>My Blogs</p>
            <div className={styles.carousel}>
                {blogs.length > 0
                    ? blogs.map(b => <BlogsList key={b._id} blog={b} />)
                    : <p className={styles.centered}>
                        No added blogs yet.
                        <Link to='/blog/add'>Click here to add</Link>
                    </p>
                }
            </div>
        </div>
    );
};