import React, { useState } from "react";

export default function Modul(props) {
 
  const[color ,setColor]=useState('light');

 const handlemode=()=>{
     props.mode="dark";
 }
 const changecolor1=()=>{
   if(color==='light')
   {
      document.body.style.backgroundColor='#ffc107';
      setColor ('#ffc107');
   }
   else if(color==='#ffc107')
   {
     document.body.style.backgroundColor='white';
     setColor('#ffc107')
   }
  
  
 }
 const changecolor2=()=>{
   document.body.style.backgroundColor='#d63384';
 }
 return (
   <nav
     className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
   >
     <div className="container-fluid">
       <a className="navbar-brand" href="/">
         {props.title}
       </a>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="/navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="/">
               Home
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/">
               About
             </a>
           </li>
         </ul>
         <button className="Newbtn1" onClick={changecolor1}>Green</button>
         <button className="Newbtn2" onClick={changecolor2}>Yellow</button>
         <button className="Newbtn3"></button>

         <div className={`form-check form-switch text-${ props.mode==='light' ? 'dark' : 'light'}`}>
           <input
             className="form-check-input"
             type="checkbox"
             role="switch"
             id="flexSwitchCheckDefault"
             onClick={props.togglemode}
           />
           <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
            Dark Mode
           </label>
         </div>
       </div>
     </div>
   </nav>
 );
}

Modul.defaultProps = {
 title: "Something Else",
};
