import styles from './Sort.module.css';

export const Sort = ({
    onSortChange
}) => {
    return(
        <select onChange={(e) => onSortChange(e.target.value)} className={styles.sort}>
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
        </select>
    )
};