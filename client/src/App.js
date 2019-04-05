import React from 'react';
import CompanyListPage from './pages/CompanyListPage';
import Modal from 'react-modal'
import SignupLogin from './components/SignupLogin';
import { openLoginModal, closeLoginModal } from './actions';
import { connect } from 'react-redux';

const App = ({ modalOpen, dispatch }) => {
  
  const handleModalOpen = () => {
    dispatch(openLoginModal())
  }
  const handleModalClose = () => {
    dispatch(closeLoginModal())
  }
  return (
    <div>
      <button onClick={handleModalOpen}>Login/Signup</button>
      <Modal isOpen={modalOpen} onRequestClose={handleModalClose}>
        <SignupLogin />
      </Modal>
      <CompanyListPage /></div>
  )
}

const mapState = state => ({
  modalOpen: state.loginModalOpen 
})




export default connect(mapState)(App);
