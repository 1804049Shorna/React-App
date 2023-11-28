import React, { useState } from "react";

export default function Textform(props) {
 const [text, setText] = useState("");
 const [isBold, setIsBold] = useState(false);

 const handleClick = () => {
   const updateText = text.toUpperCase();
   setText(updateText);
 };

 const handlelowClick = () => {
   const updateText = text.toLowerCase();
   setText(updateText);
 };

 const handleremClick = () => {
   const updateText = "";
   setText(updateText);
 };

 const handleboldClick = () => {
   setIsBold(!isBold);
 };

 const handleChange = (event) => {
   setText(event.target.value);
 };

 return (
   <>
     <div className="container">
       <h1>{props.heading}</h1>
       <div className="mb-3">
         <textarea
           className="form-control"
           id="exampleFormControlTextarea1"
           rows="3"
           value={text}
           onChange={handleChange}
         ></textarea>
       </div>
       <div dangerouslySetInnerHTML={{ __html: isBold ? `<strong>${text}</strong>` : text }}></div>
       <button className="btn btn-primary " onClick={handleClick}>Convert to Uppercase</button>
       <button className=" btn btn-warning mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
       <button className="btn btn-info mx-2" onClick={handleremClick}>Clear Text</button>
       <button className="btn btn-dark mx-2" onClick={handleboldClick}>Bold Text</button>
     </div>
     <div className="container mb-2">
       You have {text.length} characters in your sentence 
       and {text.split(" ").length} words
     </div>
     <p className="container mb-3">You need {.0008 * text.split(" ").length} time to read this paragraph</p>
   </>
 );
}
