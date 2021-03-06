import { SET_LOCALE, ADD_QUERY } from 'Root/types/root';

const setLocale = newLocale => ({ type: SET_LOCALE, payload: { locale: newLocale } });
const saveQuery = queryString => ({ type: ADD_QUERY, payload: { query: queryString } });

export {
  setLocale,
  saveQuery,
};
