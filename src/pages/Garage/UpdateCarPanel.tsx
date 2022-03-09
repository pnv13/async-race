/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { updateCarAPI } from '../../services/dataAPI';
import { IGarageContext, IBaseGarageProps } from '../../types/data';
import { GarageContext } from './GarageContext';

const UpdateCarPanel: React.FC<IBaseGarageProps> = ({ data }) => {
  const { mainDataPage, setMainDataPage } = data;

  const {
    click, setClick, updateCar, disabled, setDisabled,
  } = useContext<IGarageContext>(GarageContext);

  const { name, color, id } = updateCar;

  useEffect(() => {
    setMainDataPage({
      ...mainDataPage, updateInput: name, updateInputColor: color, id,
    });
  }, [color, name]);

  const updateCarInList = async () => {
    await updateCarAPI(mainDataPage.id, {
      name: mainDataPage.updateInput,
      color: mainDataPage.updateInputColor,
    });
    setClick(!click);
    setMainDataPage({ ...mainDataPage, updateInput: '', updateInputColor: '#ffffff' });
    setDisabled(true);
  };

  const setCarModel: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setMainDataPage({ ...mainDataPage, updateInput: e.target.value });
  };

  const setCarColor: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setMainDataPage({ ...mainDataPage, updateInputColor: e.target.value });
  };

  return (
    <div>
      <input
        disabled={disabled}
        value={mainDataPage.updateInput}
        onChange={setCarModel}
      />
      <input
        disabled={disabled}
        value={mainDataPage.updateInputColor}
        onChange={setCarColor}
        type="color"
      />
      <button
        disabled={disabled}
        type="button"
        onClick={updateCarInList}
      >
        Update Car
      </button>
    </div>
  );
};

export default UpdateCarPanel;
