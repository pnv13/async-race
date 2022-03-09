/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { createCarAPI } from './dataAPI';

const carsBrands = [
  'Audi',
  'Alfa Romeo',
  'Alpina',
  'Aston Martin',
  'Axon',
  'Ford',
  'Ferrari',
  'Fiat',
  'GAZ',
  'GMC',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Isuzu',
  'JAC',
  'Jaguar',
  'Jeep',
  'Kamaz',
  'Lada',
  'Lexus',
  'Lotus',
  'MAN',
  'Maybach',
  'MAZ',
  'Mazda',
  'McLaren',
  'Nissan',
  'Opel',
  'Paccar',
  'Pagani',
  'Pontiac',
  'Porsche',
  'Renault',
  'Å koda',
  'Smart',
  'Subaru',
  'Suzuki',
  'Tesla',
  'Toyota',
  'UAZ',
  'Volvo',
  'ZAZ',
  'XPeng',
  'TVR',
  'Saab',
  'RAM',
  'Chevrolet',
  'Mazzanti',
  'Daewoo',
];

const carsModels = [
  'Roadster',
  'S',
  'X',
  '3',
  'Y',
  'Cybertruck',
  'X5',
  'X7',
  'X3',
  'X6',
  'GT4',
  'FXX',
  '599 GTO',
  'Enzo',
  '458 Italia',
  '250 GTO',
  'Priora',
  '4x4',
  'Rio',
  'Focus',
  'Kalina',
  'Vesta',
  'Spark',
  'Lacetti',
  'Nexia',
  'Matiz',
  'Cobalt',
  'Captiva',
  'A7',
  'A5',
  'A3',
  'A8',
  'TT',
  'Corolla',
  'Camry',
  'RAV4',
  'Impreza',
  'WRX',
  'ES',
  'LS',
  'RX',
  'GX',
  'LX',
  'GS',
  'LC500',
  'Gallardo',
  'Aventador',
  '911',
  'Cayenne',
  'FX37',
];

const getRandomCar = (): string => {
  const brand = carsBrands[Math.floor(Math.random() * carsBrands.length)];
  const model = carsModels[Math.floor(Math.random() * carsModels.length)];
  return `${brand} ${model}`;
};

const getRandomColor = (): string => {
  let result = '#';
  const combinations = '0123456789abcdef';
  while (result.length < 7) {
    result += combinations[Math.floor(Math.random() * combinations.length)];
  }
  return result;
};

export const createOneHundredCars = (): void => {
  Promise.all(
    new Array(100).fill(0).map(() =>
      createCarAPI({
        name: getRandomCar(),
        color: getRandomColor(),
      }),
    ),
  );
};

export default {};
