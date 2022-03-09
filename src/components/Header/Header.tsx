import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Link className={styles.link} to="/">to Garage</Link>
    <Link className={styles.link} to="/winners">to Winners</Link>
  </header>
);

export default Header;
