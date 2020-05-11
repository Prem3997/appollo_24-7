import React from 'react';
import '../../styles/basetemplate-styles/NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  
    return (
        <div>
              <Navbar className="navbar">   
    <Nav className="navbar-nav">
           <NavLink id="navbar-dashboard" exact activeClassName="navbar__link--active"
             className="navbar__link" to="/dash-board" > <span className="dash-span">DASHBOARD</span>
            </NavLink>
            <NavLink id="navbar-admin" exact activeClassName="navbar__link--active"
             className="navbar__link" to="/manage-admin" > <span className="admin-span">MANAGE ADMINS</span>
            </NavLink>
    </Nav>
    </Navbar> 
 
        </div>
    );
}

export default NavBar;
