import { json, Navigate } from "react-router-dom";
import { checkSessionValid } from "./HelperHttpFunctions";
import { useState, useEffect } from "react";
import React from "react";

export const ProtectedRoute = (props) => {
    const [ valid, setValid] = useState(true);


    useEffect(()=>{
      checkSessionValid()
      .then(response => response.json())
      .then(jsonResponse=>{
        console.log(jsonResponse);
        setValid(jsonResponse);
      }).then(console.log(valid));
    });



      // validateSession().then(async(response)=>{
      //     const jsonResponse = await response.json();
      //     await setValid(jsonResponse);
      //     console.log(valid);
          
      // });                           
   
    if (!valid) {
      return <Navigate to="../login" replace />;
    }
  
    return props.children;
  };