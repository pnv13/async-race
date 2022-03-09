import React, { useState } from 'react';
import { driveAPI, startEngineAPI, stopEngineAPI } from '../../services/dataAPI';
import { ICarEngine } from '../../types/data';
import styles from './Garage.module.css';

const CarEngine: React.FC<ICarEngine> = ({
  setAnimationTime, setEngineValue, car, winnerInfo,
}) => {
  const [isStarted, setIsStarted] = useState(false);
  const { setWinner } = winnerInfo;

  const bestCar = (animationTime: string) => {
    setWinner((prevState: string[]) => {
      if (!prevState[0].length) {
        return [car.name, animationTime];
      }
      if (+prevState[1] > +animationTime) {
        return [car.name, animationTime];
      }
      return prevState;
    });
  };

  const startCar = async () => {
    setIsStarted(true);
    const { velocity, distance } = await startEngineAPI(car.id);
    const animationTime = (Math.round(distance / velocity) / 1000)
      .toFixed(2);
    driveAPI(car.id)
      .then((result) => {
        if (!result.success) {
          setAnimationTime({
            animationDuration: `${animationTime}s`,
            animationPlayState: 'paused',
          });
        }
        if (result.success) {
          bestCar(animationTime);
        }
      });
    setAnimationTime({
      animationDuration: `${animationTime}s`,
      animationPlayState: 'running',
    });
    setEngineValue(`${styles.started}`);
  };

  const stopCar = async () => {
    setIsStarted(false);
    await stopEngineAPI(car.id);
    setAnimationTime({
      animationDuration: '0ms',
      animationPlayState: 'paused',
    });
    setEngineValue(`${styles.stopped}`);
  };

  return (
    <div className={styles.carDisplay}>
      <button
        disabled={isStarted}
        className={`${styles.btn} ${styles.btnStart}`}
        type="button"
        onClick={startCar}
      >
        D
      </button>
      <button
        disabled={!isStarted}
        className={`${styles.btn} ${styles.btnStop}`}
        type="button"
        onClick={stopCar}
      >
        P
      </button>
    </div>
  );
};

export default CarEngine;
