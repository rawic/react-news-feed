/* eslint-disable import/prefer-default-export */
import { ERR_FETCH_MSG } from './constants';

const checkStatus = async (response) => {
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  throw new Error(ERR_FETCH_MSG);
};

export async function getData(url) {
  // try {
  const response = await fetch(url);
  return checkStatus(response);
  // } catch {
  //   return Promise.reject(ERR_FETCH_MSG);
  // }
}
