import React, { useContext, useState } from 'react';
import { deleteCarAPI, getCarAPI } from '../../services/dataAPI';
import { ICarProps, IGarageContext } from '../../types/data';
import styles from './Garage.module.css';
import { ReactComponent as CarImg } from '../../assets/svg/car.svg';
import { ReactComponent as Finish } from '../../assets/svg/finish.svg';
import { GarageContext } from './GarageContext';
import CarEngine from './CarEngine';

const Car: React.FC<ICarProps> = ({ car }) => {
  const [engineValue, setEngineValue] = useState<string>(`${styles.stopped}`);
  const [animationTime, setAnimationTime] = useState({ animationDuration: '0s', animationPlayState: 'paused' });

  const {
    click, setClick, updateCar, setUpdateCar, disabled, setDisabled, winner, setWinner,
  } = useContext<IGarageContext>(GarageContext);

  const deleteCar = async (id: number) => {
    await deleteCarAPI(id);
    setClick(!click);
  };

  const selectCar = async (id: number) => {
    setUpdateCar(await getCarAPI(id));
    setDisabled(false);
    if (updateCar.id === id) {
      if (!disabled) {
        setDisabled(true);
      }
    }
  };

  return (
    <li className={styles.carField}>
      <div>
        <button onClick={() => selectCar(car.id)} type="button">Select</button>
        <button onClick={() => deleteCar(car.id)} type="button">Remove</button>
        {car.name}
      </div>
      <div className={styles.carContainer}>
        <CarEngine
          setAnimationTime={setAnimationTime}
          setEngineValue={setEngineValue}
          car={car}
          winnerInfo={{ winner, setWinner }}
        />
        <div className={styles.carAndFinish}>
          <CarImg style={animationTime} className={`${styles.car} ${engineValue}`} fill={car.color} width={100} height={50} />
          <Finish className={styles.finish} width={50} height={50} />
        </div>
      </div>
      <div className={styles.road}> </div>
    </li>
  );
};

export default Car;
