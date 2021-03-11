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
                 <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                       <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/form">Form Data</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/posts">Posts</Link>
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