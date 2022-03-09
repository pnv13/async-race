import React, { useEffect, useState } from 'react';
import { createOneHundredCars } from '../../services/utils';
import { IGarageCarPanel } from '../../types/data';
import CreateCarPanel from './CreateCarPanel';
import UpdateCarPanel from './UpdateCarPanel';
import styles from './Garage.module.css';

const GaragePanel: React.FC<IGarageCarPanel> = ({ data, winner, renderGarage }) => {
  const [isStarted, setIsStarted] = useState(false);
  const createCars = (): void => {
    createOneHundredCars();
    renderGarage();
  };

  useEffect(() => {
    if (isStarted && winner[0].length) {
      console.log(winner);
    }
  });

  const startRace = () => {
    setIsStarted(true);
    const buttons = document.querySelectorAll(`.${styles.btn}`);
    buttons.forEach((btn, index) => {
      if (index % 2 === 0) (btn as HTMLButtonElement).click();
    });
  };

  const stopRace = () => {
    setIsStarted(false);
    const buttons = document.querySelectorAll(`.${styles.btn}`);
    buttons.forEach((btn, index) => {
      if (!(index % 2 === 0)) (btn as HTMLButtonElement).click();
    });
  };

  return (
    <>
      <CreateCarPanel data={data} renderGarage={renderGarage} />
      <UpdateCarPanel data={data} />
      <button disabled={isStarted} type="button" onClick={startRace}>Race</button>
      <button type="button" onClick={stopRace}>Reset</button>
      <button type="button" onClick={createCars}>Generate Cars</button>
    </>
  );
};

export default GaragePanel;
