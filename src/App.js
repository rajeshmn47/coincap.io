import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import millify from "millify";
import Header from './header';
import Footer from './footer';
import Coin from './coin';
import Home from './home';

function App() {

  return (
    <>
  <div className='maincontainer'>
    <Header/>
 <Home/>
       
            </div>
          
 </> );
}

export default App;
