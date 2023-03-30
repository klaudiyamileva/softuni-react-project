import { Link } from 'react-router-dom';
import styles from './Blog.module.css';
import * as blogService from '../../services/blogService';
import { useEffect, useState } from 'react';
import { BlogsList } from './BlogsList';
import { Search } from '../Serach/Search';
import * as searchService from '../../services/searchService';
import { Sort } from '../Sort/Sort';
import { Pagination } from '../Pagination/Pagination';

export const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchedBlogs, setSearchedBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('Latest');

    useEffect(() => {
        blogService.getLatestBlogs(page)
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

    const onChange = (value) => {
        if (value === 'Latest') {
            setSort('Latest');
            blogService.getLatestBlogs(page)
                .then(result => {
                    setBlogs(result);
                });
        } else {
            setSort('Oldest');
            blogService.getOldestBlogs(page)
                .then(result => {
                    setBlogs(result);
                });
        }
    }

    const previousPageHandler = () => {
        setPage(state => state - 1);
        changeBlogs(page - 1);
    }

    const nextPageHandler = () => {
        setPage(state => state + 1);
        changeBlogs(page + 1);
    }

    const changeBlogs = (page) => {
        if (sort === 'Latest') {
            blogService.getLatestBlogs(page)
                .then(result => {
                    setBlogs(result);
                });
            console.log(page);
        } else {
            blogService.getOldestBlogs(page)
                .then(result => {
                    setBlogs(result);
                });
            console.log(page);
        }
    }

    return (
        <>
            <Search onSubmitSearch={onSubmit} />
            <Sort onSortChange={onChange} />
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
            <Pagination previousPage={previousPageHandler} nextPage={nextPageHandler} />
        </>
    );
};