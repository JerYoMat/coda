import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser, signupUser } from '../actions';
import './SignupLoginPage.scss'

const SignUpLoginPage = ({loginUser, signupUser}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  
  const handleSubmit = e => {
    e.preventDefault();
    if (activeTab === 0) {
     loginUser(email, password);
    } else {
     signupUser(email, password);
    }
    
  };

  return (
    <div className='login-signup-container'>
      <div className='form-container'>
        <ul className='active-tabs'>
          <li onClick={() => {setActiveTab(0)}}>Log In</li>
          <li onClick={() => {setActiveTab(1)}}>Sign Up</li>
        </ul>
        <form onSubmit={handleSubmit}>
          <h2>{activeTab === 0 ? ("Log In") : ("Sign Up")}</h2>
          <label>
              Email:
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            {activeTab === 1 ? (
              <React.Fragment>
              <label>
              Password Confirmation:
              <input
                value={passwordConfirmation}
                onChange={e => setPasswordConfirmation(e.target.value)}
              />
            </label>
            {password !== passwordConfirmation && <span className='warning'>Password must match confirmation</span>}
            <button onSubmit={() => signupUser(email, password)} disabled={password === passwordConfirmation ? false : true}>SignUp</button>
            </React.Fragment>
            ) : (
              <button onSubmit={() => loginUser(email, password)}>Login</button>
            )}
            
        </form>
      </div>
    </div>
  )
}

const mapDispatch = {
  loginUser, signupUser
}
const mapState = state => (state)


export default connect(mapState, mapDispatch)(SignUpLoginPage);

