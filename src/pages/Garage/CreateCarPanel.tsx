import React from 'react';
import { createCarAPI } from '../../services/dataAPI';
import { ICreateCarPanel } from '../../types/data';

const CreateCarPanel: React.FC<ICreateCarPanel> = ({ data, renderGarage }) => {
  const { mainDataPage, setMainDataPage } = data;

  const setCarModel: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setMainDataPage({ ...mainDataPage, createInput: e.target.value });
  };

  const setCarColor: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setMainDataPage({ ...mainDataPage, createInputColor: e.target.value });
  };

  const createCar = async () => {
    await createCarAPI({
      name: mainDataPage.createInput,
      color: mainDataPage.createInputColor,
    });
    renderGarage();
    setMainDataPage({ ...mainDataPage, createInput: '', createInputColor: '#ffffff' });
  };

  return (
    <div>
      <input value={mainDataPage.createInput} onChange={setCarModel} />
      <input value={mainDataPage.createInputColor} onChange={setCarColor} type="color" />
      <button type="button" onClick={createCar}>Create Car</button>
    </div>
  );
};

export default CreateCarPanel;
