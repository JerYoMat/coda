import React from 'react';
import './NavbarCustom.scss';
import { Link } from '@reach/router';
import {ReactComponent as Coda} from '../images/coda.svg'
const NavbarCustom = ({ user }) => {
  
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <Link className="navbar-brand" to="/"><Coda className='coda' /><span>CoDA</span></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/compare">Compare <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item user">
          { user === null ? (
            <Link className="nav-link" to="/login">Log In/Sign Up <span className="sr-only">(current)</span></Link>) : (
            <Link className="nav-link" to="/users/{user.id}">User <span className="sr-only">(current)</span></Link>)
          }

          
            </li>

        </ul>
      </div>
  </nav>
  )
}

export default NavbarCustom;
