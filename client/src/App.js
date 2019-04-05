import React from 'react';
import { Router, Redirect } from '@reach/router'; 
import CompanyListPage from './pages/CompanyListPage';
import SignupLoginPage from './pages/SignupLoginPage';


const App = () => {
  return (
    <Router>
      <Redirect noThrow from='/' to='/companies' />
      <CompanyListPage path='companies'/>
      <SignupLoginPage path='/login' />
    </Router>
  )
}

export default App;
