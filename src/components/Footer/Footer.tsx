import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.aboutProject}>
      <p>©</p>
      <p className={styles.yearMade}>2021</p>
      <a className={styles.gitUser} href="https://github.com/pnv13" target="_blank" rel="noreferrer">PNV13</a>
    </div>
    <a className={styles.logo} href="https://rs.school/js/" target="_blank" rel="noreferrer"> </a>
  </footer>
);

export default Footer;
