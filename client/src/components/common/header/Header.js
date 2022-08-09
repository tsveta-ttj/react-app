import { Link } from 'react-router-dom';

import styles from '../header/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to="/" className={styles.link}>Home</Link></li>

          <li className={styles.navItem}><Link to="/catalog" className={styles.link}>Catalog</Link></li>
          <li className={styles.navItem}><Link to="/create" className={styles.link}>Create</Link></li>
          <li className={styles.navItem}><Link to="/logout" className={styles.link}>Log Out</Link></li>
          <li className={styles.navItem}><Link to="/login" className={styles.link}>LogIn</Link></li>
          <li className={styles.navItem}><Link to="/register" className={styles.link}>Register</Link></li>

        </ul>
      </nav>
    </header>
  );
}