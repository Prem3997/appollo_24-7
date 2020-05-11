import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../Routes';
import './style.scss';
import NavBar from '../../components/BaseTemplate/NavBar';
import Header from '../../components/BaseTemplate/Header';
import Footer from '../../components/BaseTemplate/Footer';


function App() {
  return (
    <div className="app-wrapper">
      <header>
      
      </header>
      <main>
        <Header></Header>
        <NavBar></NavBar> 
        <Routes />
      </main>
        <Footer></Footer> 
    </div>
  );
}

export default App;
