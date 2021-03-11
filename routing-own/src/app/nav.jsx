import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link nav-item" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" to="/features">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" to="/price">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link nav-item" to="/register">Register</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </React.Fragment>
         );
    }
}
 
export default Nav;