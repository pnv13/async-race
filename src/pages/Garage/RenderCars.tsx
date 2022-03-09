/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import Error from '../../services/Error';
import { ICar, IRenderCarsProps } from '../../types/data';
import { getCarsAPI } from '../../services/dataAPI';
import Car from './Car';

const RenderCars: React.FC<IRenderCarsProps> = ({
  btnClick, page, setNextPage,
}) => {
  const [pageN, limitN = 7] = page;
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cars, setCars] = useState<ICar[]>([]);
  const [carsCount, setCarsCount] = useState(0);

  useEffect(() => {
    getCarsAPI(pageN, limitN).then(
      (result) => {
        setIsLoaded(true);
        setCars(result.cars);
        if (result.count) setCarsCount(+result.count);
        if (result.cars.length < 7) {
          setNextPage(true);
        } else {
          setNextPage(false);
        }
      },
      (e: string) => {
        setIsLoaded(true);
        setError(e);
      },
    );
  }, [pageN, limitN, btnClick]);

  if (error) return <Error err={error} />;
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <ul>
      Garage ({carsCount})
      Page #{pageN}
      {cars.length
        ? cars.map((car) => (
          <Car
            key={car.id}
            car={car}
          />
        ))
        : <h2>Cars not found! Please add some car.</h2>}
    </ul>
  );
};

export default RenderCars;
