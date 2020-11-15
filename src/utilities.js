/* eslint-disable import/prefer-default-export */
import { ERR_FETCH_MSG } from './constants';

export async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(ERR_FETCH_MSG);
  } catch {
    return Promise.reject(ERR_FETCH_MSG);
  }
}
