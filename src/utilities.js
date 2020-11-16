/* eslint-disable import/prefer-default-export */
import { ERR_FETCH_MSG } from './constants';

export async function getData(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const json = await response.json();
      return json;
    }
  } catch {
    throw new Error(ERR_FETCH_MSG);
  }

  return null;
}
