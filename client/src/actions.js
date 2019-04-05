import { createCompany, getCompanies, login, signup } from './api';

export const ADD_COMPANY_BEGIN = 'ADD_COMPANY_BEGIN';
export const ADD_COMPANY_SUCCESS = 'ADD_COMPANY_SUCCESS';
export const ADD_COMPANY_ERROR = 'ADD_COMPANY_ERROR';
// ---------------------------------------------------
export const LOAD_COMPANIES_BEGIN = 'LOAD_COMPANIES_BEGIN';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_COMPANIES_ERROR = 'LOAD_COMPANIES_ERROR';
// --------------------------------------------------
export const LOGIN_BEGIN = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
// --------------------------------------------------
export const SIGNUP_BEGIN = 'SIGNUP_BEGIN';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
// ----------------------------------
export const OPEN_LOGIN_MODAL = 'OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'CLOSE_LOGIN_MODAL'

//! ------
//! ------
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


export const loginUser = (email, password) => {
  return dispatch => {
    dispatch({ type: LOGIN_BEGIN });
    login(email, password)
    .then(user => {
      dispatch({ 
        type: LOGIN_SUCCESS,
        payload: user
      });
    })
    .catch(error => {
      dispatch({ type: LOGIN_ERROR, error})
    })
  }
}


export const signupUser = (email, password) => {
  return dispatch => {
    dispatch({ type: SIGNUP_BEGIN });
    signup(email, password)
    .then(user => {
      dispatch({ 
        type: SIGNUP_SUCCESS,
        payload: user
      });
    })
    .catch(error => {
      dispatch({ type: SIGNUP_ERROR, error})
    })
  }
}

export const openLoginModal = () => ({
  type: OPEN_LOGIN_MODAL
});
export const closeLoginModal = () => ({
  type: CLOSE_LOGIN_MODAL
});
