import React from 'react';
import { Router, Redirect } from '@reach/router'; 
import CompanyListPage from './pages/CompanyListPage';
import SignupLoginPage from './pages/SignupLoginPage';
import CompanyDetailPage from './pages/CompanyDetailPage';

const App = () => {
  return (
    <Router>
      <Redirect noThrow from='/' to='/companies' />
      <CompanyListPage path='companies'/>
      <SignupLoginPage path='/login' />
      <CompanyDetailPage path='/companies/:companyId' />
    </Router>
  )
}

export default App;
