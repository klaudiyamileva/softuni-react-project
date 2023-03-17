import styles from './Careers.module.css';
import { Link } from 'react-router-dom';

export const CareersList = ({
    career
}) => {
    return (
    <div className={styles.card}>
        <img className={styles.img} src={career.imageUrl} alt="" />
        <div className={`${styles.body} text-left pr-0 pl-0`}>
            <h5>{career.position}</h5>
            <Link className={styles.more} to={`/careers/${career._id}`}>
                Read More
            </Link>
        </div>
    </div>
    );
};