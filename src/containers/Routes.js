import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/BaseTemplate/NavBar';
import Footer from '../components/BaseTemplate/Footer';
import Header from '../components/BaseTemplate/Header';
import Dashboard from '../components/Dashboard/Dashboard';
import ManageAdmins from './ManageAdmins';
import Login from './Login/Login';
import AdminComponent from '../components/AdminComponent/AdminComponent';
import AddNewAdminMain from '../components/CreateAdmin/AddNewAdminMain';
import PrivateRoute from './Login/PrivateRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <PrivateRoute exact path="/dash-board" component={Dashboard} />
    <PrivateRoute exact path="/manage-admin" component={ManageAdmins}/>
    <PrivateRoute exact path="/nav-bar" component={NavBar}/>
    <PrivateRoute exact path="/footer" component={Footer}/>    
    <PrivateRoute exact path="/header" component={Header}/>
    <PrivateRoute exact path="/admin/:id" component={AdminComponent}/>
    <PrivateRoute exact path="/createAdmin" component={AddNewAdminMain}/> 
    <Route component={Login}/>
  </Switch>
);

export default Routes;
