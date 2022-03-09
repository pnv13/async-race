import { createContext } from 'react';
import { IGarageContext } from '../../types/data';

export const GarageContext = createContext<IGarageContext>({
  click: false,
  setClick: () => {},
  updateCar: {
    name: '',
    color: '#ffffff',
    id: -1,
  },
  setUpdateCar: () => {},
  disabled: true,
  setDisabled: () => {},
  winner: ['', ''],
  setWinner: () => {},
});

export default {};
