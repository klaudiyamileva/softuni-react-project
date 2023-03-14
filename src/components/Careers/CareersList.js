import { Link } from 'react-router-dom';
import styles from './Careers.module.css';

export const CareersList = () => {
    return (
        <div className={styles.container}>
            <h2>Careers</h2>
            <div className={styles.carousel}>
                <div className={styles.card}>
                    <img className={styles.img} src="/styles/images/news1.jpg" alt="" />
                    <div className={`${styles.body} text-left pr-0 pl-0`}>
                        <h5>Aenean ultrices lorem quis blandit tempor urabitur accumsan.</h5>
                        <p className={styles.text}>Donec non sem mi. In hac habitasse platea dictumst. Nullam a feugiat</p>
                        <Link className={styles.more} to="/careers/:id">
                            Read More 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
