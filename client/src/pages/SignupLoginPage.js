import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser, signupUser } from '../actions';


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
    <ul>
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
          <div>
          <label>
          Password Confirmation:
          <input
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
        </label>
        <button onSubmit={() => signupUser(email, password)} disabled={password === passwordConfirmation ? false : true}>SignUp</button>
        </div>
        ) : (
          <button onSubmit={() => loginUser(email, password)}>Login</button>
        )}
        
    </form>
    </div>
  )
}

const mapDispatch = {
  loginUser, signupUser
}
const mapState = state => (state)


export default connect(mapState, mapDispatch)(SignUpLoginPage);

