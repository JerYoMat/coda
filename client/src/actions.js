import { createCompany, getCompanies } from './api';

export const ADD_COMPANY_BEGIN = 'ADD_COMPANY_BEGIN';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_ERROR = 'ADD_COMPANY_ERROR';
// ---------------------------------------------------
export const LOAD_COMPANIES_BEGIN = 'LOAD_COMPANIES_BEGIN';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_COMPANIES_ERROR = 'LOAD_COMPANIES_ERROR';
// --------------------------------------------------

export const addCompany = (name, ticker, exchange) => {
  return dispatch => {
    dispatch({ type: ADD_COMPANY_BEGIN });
    createCompany(name, ticker, exchange)
      .then(company => {
        dispatch({
          type: ADD_COMPANY_SUCCESS,
          payload: company
        });
      })
      .catch(error => {
        dispatch({ type: ADD_COMPANY_ERROR, error });
      });
  };
};

export const loadCompanies = () => {
  return dispatch => {
    dispatch({ type: LOAD_COMPANIES_BEGIN });
    getCompanies()
    .then(courses => {
      dispatch({
        type: LOAD_COMPANIES_SUCCESS,
        payload: courses
      });
    })
    .catch(error => {
      dispatch({ type: LOAD_COMPANIES_ERROR, error });
    });
  };
};