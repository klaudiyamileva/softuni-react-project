import styles from './Careers.module.css';
import * as careersService from '../../services/careersService';
import { useEffect, useState } from 'react';
import { CareersList } from './CereersList';

export const AllCareers = () => {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        careersService.getCereers()
            .then(result => {
                setCareers(result);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h2>Careers</h2>
            <div className={styles.carousel}>
                {careers.length > 0
                    ? careers.map(c => <CareersList key={c._id} career={c} />)
                    : <p>No positions yet</p>}
            </div>
        </div>
    );
};
