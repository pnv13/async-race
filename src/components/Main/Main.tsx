import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Main.module.css';
import Garage from '../../pages/Garage/Garage';
import NotFound from '../../pages/NotFound/NotFound';
import Winners from '../../pages/Winners/Winners';

const Main: React.FC = () => {
  const [disabled, setDisabled] = useState(true);
  const [winner, setWinner] = useState(['', '0']);
  const [mainDataPage, setMainDataPage] = useState({
    page: 1,
    createInput: '',
    createInputColor: '#ffffff',
    updateInput: '',
    updateInputColor: '#ffffff',
    isDisabled: disabled,
    id: 0,
  });

  return (
    <main className={styles.main}>
      <Routes>
        <Route
          path="/"
          element={(
            <Garage
              data={{ mainDataPage, setMainDataPage }}
              isDisabled={{ disabled, setDisabled }}
              winnerInfo={{ winner, setWinner }}
            />
          )}
        />
        <Route path="/winners" element={<Winners />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
