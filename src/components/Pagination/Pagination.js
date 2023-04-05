// import { useEffect, useState } from 'react';
// import styles from './Pagination.module.css';
// import * as blogService from '../../services/blogService';

// export const Pagination = ({
//     previousPage,
//     nextPage,
//     page,
// }) => {
//     const [isNextPageClickable, setIsNextPageClickable] = useState(true);

//     useEffect(() => {
//         const setIsClickable = async () => {
//             const result = await blogService.getAllBlogs();
//             const currentBlogs = ((page - 1) * 3) + 3;
//             setIsNextPageClickable(currentBlogs < result.length);
//         };
//         setIsClickable();
//     }, [page]);

//     return (
//         <div className={styles.pagination}>
//             {page === 1
//                 ? <button onClick={() => previousPage()} className={styles.button} disabled>Previous</button>
//                 : <button onClick={() => previousPage()} className={styles.button}>Previous</button>
//             }
//             <p>Current</p>
//             {isNextPageClickable
//                 ? <button onClick={() => nextPage()} className={styles.button}>Next</button>
//                 : <button onClick={() => nextPage()} className={styles.button} disabled>Next</button>}

//         </div>
//     );
// }