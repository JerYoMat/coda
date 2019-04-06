import React from 'react';
import { Router, Redirect } from '@reach/router'; 
import { connect } from 'react-redux'
import CompanyListPage from './pages/CompanyListPage';
import CompanyDetailPage from './pages/CompanyDetailPage';
import NavbarCustom from './components/NavbarCustom';
import LoginCube from './components/LoginCube';
import HomePage from './pages/HomePage';

const App = ({ user }) => {
  return (
    <div>
    <NavbarCustom user={user}/>
    <Router> 
      <HomePage path='/' />
      <CompanyListPage path='companies'/>
      <LoginCube path='/login' />
      <CompanyDetailPage path='/companies/:companyId' />
    </Router>
    </div>
  )
}

const mapState = state => ({
  user: state.users.user
})

export default connect(mapState)(App);
