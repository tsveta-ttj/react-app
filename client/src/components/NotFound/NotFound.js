import { Link } from 'react-router-dom';
import styles from '../NotFound/NotFound.module.css';
const NotFound = () => {
    return (
        <>
            <p className={styles.text}>SORRY</p>
            <p className={styles.text2}>we couldn`t find that page</p>
            <p className={styles.text2}>
                Go to <Link className='accent' to="/">Home</Link> page
            </p>
        </>
    );
};

export default NotFound;
