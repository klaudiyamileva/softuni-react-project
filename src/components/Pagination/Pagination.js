import styles from './Pagination.module.css';

export const Pagination = ({
    previousPage,
    nextPage,
    page
}) => {
    return (
        <div className={styles.pagination}>
            {page === 1
                ? <button onClick={() => previousPage()} className={styles.button} disabled>Previous</button>
                : <button onClick={() => previousPage()} className={styles.button}>Previous</button>
            }
            <p>Current</p>
            <button onClick={() => nextPage()} className={styles.button}>Next</button>
        </div>
    );
}