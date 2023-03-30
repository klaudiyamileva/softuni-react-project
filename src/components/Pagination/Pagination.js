import styles from './Pagination.module.css';

export const Pagination = ({
    previousPage,
    nextPage
}) => {
    return (
        <div className={styles.pagination}>
            <button onClick={() => previousPage()} className={styles.button}>Previous</button>
            <p>Current</p>
            <button onClick={() => nextPage()} className={styles.button}>Next</button>
        </div>
    );
}