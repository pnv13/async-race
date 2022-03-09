/* eslint-disable implicit-arrow-linebreak */
import React, { useMemo, useState } from 'react';
import RenderCars from './RenderCars';
import { IGarageProps } from '../../types/data';
import GaragePanel from './GaragePanel';
import { GarageContext } from './GarageContext';

const Garage: React.FC<IGarageProps> = ({ isDisabled, data, winnerInfo }) => {
  const { disabled, setDisabled } = isDisabled;
  const { mainDataPage, setMainDataPage } = data;
  const { winner, setWinner } = winnerInfo;
  const [click, setClick] = useState(false);
  const [updateCar, setUpdateCar] = useState({
    name: mainDataPage.updateInput,
    color: mainDataPage.updateInputColor,
    id: mainDataPage.id,
  });
  const [nextPage, setNextPage] = useState(true);

  const providerValue = useMemo(() => ({
    click, setClick, updateCar, setUpdateCar, disabled, setDisabled, winner, setWinner,
  }), [click, updateCar, disabled, setDisabled, winner, setWinner]);

  const increment = () => setMainDataPage({ ...mainDataPage, page: mainDataPage.page + 1 });
  const decrement = () =>
    (mainDataPage.page > 1
      ? setMainDataPage({ ...mainDataPage, page: mainDataPage.page - 1 })
      : mainDataPage.page);

  return (
    <GarageContext.Provider value={providerValue}>
      <>
        <GaragePanel data={data} winner={winner} renderGarage={() => setClick(!click)} />
        <RenderCars
          btnClick={click}
          page={[mainDataPage.page]}
          setNextPage={setNextPage}
        />
        <button type="button" onClick={decrement}>Prev Page</button>
        <button disabled={nextPage} type="button" onClick={increment}>Next Page</button>
      </>
    </GarageContext.Provider>
  );
};

export default Garage;
