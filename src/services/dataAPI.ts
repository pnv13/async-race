import { IBody, ICar, IGetCarsAPI } from '../types/data';
/* eslint-disable implicit-arrow-linebreak */
const base = 'http://127.0.0.1:3000';
const garage = `${base}/garage`;
// const winners = `${base}/winners`;
const engine = `${base}/engine`;

export const getCarAPI = async (id: number): Promise<ICar> =>
  (await fetch(`${garage}/${id}`)).json();

export const getCarsAPI = async (page: number, limit: number): Promise<IGetCarsAPI> => {
  const res = await fetch(
    `${garage}?${new URLSearchParams({ _page: `${page}`, _limit: `${limit}` }).toString()}`,
  );
  return {
    cars: await res.json(),
    count: res.headers.get('X-Total-Count') || '0',
  };
};

export const createCarAPI = async (body: IBody): Promise<Response> =>
  (
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const updateCarAPI = async (id: number, body: IBody): Promise<Response> =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteCarAPI = async (id: number): Promise<Response> =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'DELETE',
    })
  ).json();

export const startEngineAPI = async (id: number) =>
  (await fetch(`${engine}?id=${id}&status=started`, { method: 'PATCH' })).json();

export const stopEngineAPI = async (id: number) =>
  (await fetch(`${engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

export const driveAPI = async (id: number) => {
  const res = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};
export default {};
