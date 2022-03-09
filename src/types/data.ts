import React from 'react';

export interface IBody {
  name: string;
  color: string;
}

export interface ICar extends IBody {
  id: number;
}

export interface IGetCarsAPI {
  cars: ICar[];
  count: string;
}

export interface IBaseGarageProps {
  data: {
    mainDataPage: {
      page: number;
      createInput: string;
      createInputColor: string;
      updateInput: string;
      updateInputColor: string;
      isDisabled: boolean;
      id: number;
    };
    setMainDataPage: React.Dispatch<
      React.SetStateAction<{
        page: number;
        createInput: string;
        createInputColor: string;
        updateInput: string;
        updateInputColor: string;
        isDisabled: boolean;
        id: number;
      }>
    >;
  };
}

export interface ICarEngine {
  setAnimationTime: React.Dispatch<
    React.SetStateAction<{
      animationDuration: string;
      animationPlayState: string;
    }>
  >;
  setEngineValue: React.Dispatch<React.SetStateAction<string>>;
  car: ICar;
  winnerInfo: {
    winner: string[];
    setWinner: React.Dispatch<React.SetStateAction<string[]>>;
  };
}

export interface IGarageProps extends IBaseGarageProps {
  isDisabled: {
    disabled: boolean;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  };
  winnerInfo: {
    winner: string[];
    setWinner: React.Dispatch<React.SetStateAction<string[]>>;
  };
}

export interface IGarageContext {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  updateCar: {
    name: string;
    color: string;
    id: number;
  };
  setUpdateCar: React.Dispatch<
    React.SetStateAction<{
      name: string;
      color: string;
      id: number;
    }>
  >;
  disabled: boolean;
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  winner: string[];
  setWinner: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface ICarProps {
  car: ICar;
}

export interface IRenderCarsProps {
  page: number[];
  btnClick: boolean;
  setNextPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGarageCarPanel extends IBaseGarageProps {
  renderGarage: () => void;
  winner: string[];
}

export interface ICreateCarPanel extends IBaseGarageProps {
  renderGarage: () => void;
}
