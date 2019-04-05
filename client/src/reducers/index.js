import { combineReducers } from 'redux';
import companies from './companies';
import users from './users';
import financials from './financials';

export default combineReducers({
  companies,
  users,
  financials
})