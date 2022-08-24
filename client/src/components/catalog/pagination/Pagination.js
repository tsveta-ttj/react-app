import { useContext } from "react";
import {CardContext} from '../../../contexts/CardContext';
import styles from '../pagination/Pagination.module.css';

export const Pagination = () => {
    const { cardsPerPage, totalCards, paginate} = useContext(CardContext);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={styles['page-item']}>
                        <button onClick={() => paginate(number)} className={styles['page-link']}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};