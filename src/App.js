/**import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modul from "./components/Modul.js";
import TEXTFROM from "./components/Textform.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
  Routes, // Import Routes
} from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const togglemode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#245eb2";
      showAlert("Darkmode Has beem enabled", "success");
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode Has beem enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Modul title="TEXTAPP" mode={mode} togglemode={togglemode} />
        <Alert alert={alert}></Alert>
        <div className="container">
        <Routes>
           <Route path="/about" element={<About />} />
           <Route path="/" element={<TEXTFROM heading="Enter your text here" mode={mode} />} />
         </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; /** */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Modul from "./components/Modul.js";
import TEXTFROM from "./components/Textform.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import {
 BrowserRouter as Router, // Import BrowserRouter
 Route,
 Link,
 Routes, // Import Routes
} from "react-router-dom";

function App() {
 const [mode, setDarkMode] = useState("light");
 const [alert, setAlert] = useState(null);
 const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type,
  });
  setTimeout(() => {
    setAlert(null);
  }, 1000);
 };
 const togglemode = () => {
  if (mode === "light") {
    setDarkMode("dark");
    document.body.style.backgroundColor = "#245eb2";
    showAlert("Darkmode Has beem enabled", "success");
  } else {
    setDarkMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Lightmode Has beem enabled", "success");
  }
 };

 return (
  <>
    <Router> {/* Use BrowserRouter */}
      <Modul title="TEXTAPP" mode={mode} togglemode={togglemode} />
      <Alert alert={alert}></Alert>
      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TEXTFROM heading="Enter your text here" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  </>
 );
}

export default App;

