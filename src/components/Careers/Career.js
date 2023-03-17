import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Career.module.css';
import * as careersService from '../../services/careersService';

export const Career = () => {
    const { careerId } = useParams();
    const [career, setCareer] = useState({});

    useEffect(() => {
        careersService.getCareerById(careerId)
            .then(result => {
                setCareer(result);
            });
    }, [])

    return (
        <>
            <div className={styles.blog}>
                <img className={styles.img} src={career.imageUrl} alt="" />
                <h2 className={styles.title}>{career.position}</h2>
                <p className={styles.content}>{career.requirements}</p>
            </div>
            <Link className={styles.more} to="/contact">
                Contact Us
            </Link>

            {/* <form className={styles.col} id="contact">
                <h4> Apply </h4>
                <p>Send your email and we will contact you</p>
                <input type="text" className={styles.form} placeholder="Full Name" />
                <input type="email" className={styles.form} placeholder="Email" />
                <input type="submit" className={styles.more} value="Apply" />
            </form> */}
        </>
    );
};