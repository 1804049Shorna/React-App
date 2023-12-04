import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modul from "./components/Modul.js";
import TEXTFROM from "./components/Textform.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";


function App() {
 const [mode, setDarkMode]=useState("light")
 const[alert,setAlert]=useState(null);
 const showAlert=(message ,type)=>{
  setAlert({
    msg: message,
    type:type

  })
  setTimeout(()=>{
    setAlert(null);

  },1000

  )

 }
 const togglemode=()=>{
  if(mode==='light')
  {
    setDarkMode('dark');
    document.body.style.backgroundColor='#245eb2'
    showAlert("Darkmode Has beem enabled","success");



  }
 
  else{
    setDarkMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Lightmode Has beem enabled","success");
  }
   
 }
 

  return (
    <>
      <Modul title="TEXTAPP" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}></Alert>
      <div className="container">
        <TEXTFROM heading="Enter your text here" mode={mode} />
        
        {/* <About /> */}
     
      </div>
    </>
  );
}

export default App;
