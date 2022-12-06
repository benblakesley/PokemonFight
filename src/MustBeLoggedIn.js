import { json, Navigate } from "react-router-dom";
import { checkSessionValid } from "./HelperHttpFunctions";
import { useState, useEffect} from "react";
import React from "react";

export const MustBeLoggedIn = (props) => {
    const [ valid, setValid] = useState(true);


    useEffect(()=>{
      checkSessionValid()
      .then(response => response.json())
      .then(jsonResponse=>{
        setValid(jsonResponse);
      });
    });

    if (!valid) {
      return <Navigate to="../login" replace />;
    }
  
    return props.children;
  };