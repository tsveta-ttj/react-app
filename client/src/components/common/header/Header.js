import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import styles from '../header/Header.module.css';

export const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>

          {user.username && <span className={styles.hello}>Hello, {user.username}!</span>}

          <li className={styles.navItem}><Link to="/" className={styles.link}>Home</Link></li>
          <li className={styles.navItem}><Link to="/catalog" className={styles.link}>Catalog</Link></li>

          {user.accessToken
            ? <>
              <li className={styles.navItem}><Link to="/create" className={styles.link}>Create</Link></li>
              <li className={styles.navItem}><Link to="/logout" className={styles.link}>Log Out</Link></li>
            </>
            :
            <>
              <li className={styles.navItem}><Link to="/login" className={styles.link}>LogIn</Link></li>
              <li className={styles.navItem}><Link to="/register" className={styles.link}>Register</Link></li>
            </>
          }

        </ul>
      </nav>
    </header>
  );
}