import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import * as blogService from '../../services/blogService';
import { useEffect, useState } from 'react';
import { BlogsList } from './BlogsList';
import { Search } from '../Serach/Search';
import * as searchService from '../../services/searchService';

export const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchedBlogs, setSearchedBlogs] = useState([]);

    useEffect(() => {
        blogService.getBlogs()
            .then(result => {
                setBlogs(result);
            });
    }, []);

    const onSubmit = (e, searchedTitle) => {
        e.preventDefault();

        searchService.searchBlog(searchedTitle)
            .then(result => {
                if (result) {
                    setSearchedBlogs(result);
                    setBlogs([]);
                } else {
                    setSearchedBlogs([]);
                }
            });
    }

    return (
        <>
            <Search onSubmitSearch={onSubmit} />
            <Link className={styles.more} to="/blog/add">
                Add Your Blog
            </Link>
            <div className={styles.container}>
                <h2>Latest News &amp; Articles</h2>
                <div className={styles.carousel}>
                    {searchedBlogs.length > 0
                        ? searchedBlogs.map(b => <BlogsList key={b._id} blog={b} />)
                        : (blogs.length > 0
                            ? blogs.map(b => <BlogsList key={b._id} blog={b} />)
                            : <p>No blogs yet.</p>)
                    }
                </div>
            </div>
        </>
    );
};