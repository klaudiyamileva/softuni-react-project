import { useState } from 'react';
import styles from './Search.module.css';

export const Search = ({
    onSubmitSearch
}) => {
    const [formData, setFormData] = useState({
        search: '',
    });

    const handleChange = (e) => {
        setFormData((state) => (
            { ...state, [e.target.name]: e.target.value }
        ));
    };

    return (
        <form onSubmit={(e) => onSubmitSearch(e, formData.search)} className={styles.form}>
            <input
                className={styles.input}
                type="search"
                placeholder="Search..."
                name="search"
                value={formData.search}
                onChange={handleChange} />
            {/* {formData.search.length > 0 && ( */}
                <button className={styles.button} type="submit">
                    Go
                </button>
            {/* )} */}
        </form>
    );
};