import logo from './logo.svg';
import './App.css';
import Modul from './components/modul.js';
import TEXTFROM from './components/Textform.js';

import React,{useState} from "react";



function App() {
  return (
  <>
  <Modul title="TEXTAPP"/>
   <TEXTFROM  heading="Enter your text here"/>
  </>

  );
}

export default App;
