import React from 'react';
import styles from './app.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

const App: React.FC = () => (
  <div className={styles.app}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default App;
