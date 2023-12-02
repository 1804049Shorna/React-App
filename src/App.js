import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modul from "./components/modul.js";
import TEXTFROM from "./components/Textform.js";
import About from "./components/About.js";


function App() {
 const [mode, setDarkMode]=useState("light")
 const togglemode=()=>{
  if(mode==='light')
  {
    setDarkMode('dark');
    document.body.style.backgroundColor='#245eb2'


  }
  else{
    setDarkMode('light');
    document.body.style.backgroundColor='white'
  }
   
 }
  return (
    <>
      <Modul title="TEXTAPP" mode={mode} togglemode={togglemode}/>

      <div className="container">
        <TEXTFROM heading="Enter your text here" mode={mode} />
        
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
