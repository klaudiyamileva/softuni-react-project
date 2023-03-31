import { useEffect, useState } from 'react';
import styles from './Pagination.module.css';
import * as blogService from '../../services/blogService';

export const Pagination = ({
    previousPage,
    nextPage,
    page,
}) => {
    const [skip, setSkip] = useState(0);
    const [isNextPageClickable, setIsNextPageClickable] = useState(true);

    useEffect(() => {
        setSkip((page - 1) * 3);
    }, [page]);

    useEffect(() => {
        const setIsClickable = async () => {
            const result = await blogService.getAllBlogs();
            const number = skip + 3;
            setIsNextPageClickable(number < result.length);
        };
        setIsClickable();
    }, [skip]);

    // useEffect(() => {
    //     const setIsClickable = async () => {
    //         const result = await blogService.getAllBlogs();
    //         const number = result.length - (((page - 1) * 3) + 3);
    //         setIsNextPageClickable(number >= 3);
    //     };
    //     setIsClickable();
    // }, [page]);

    return (
        <div className={styles.pagination}>
            {page === 1
                ? <button onClick={() => previousPage()} className={styles.button} disabled>Previous</button>
                : <button onClick={() => previousPage()} className={styles.button}>Previous</button>
            }
            <p>Current</p>
            {isNextPageClickable
                ? <button onClick={() => nextPage()} className={styles.button}>Next</button>
                : <button onClick={() => nextPage()} className={styles.button} disabled>Next</button>}

        </div>
    );
}