import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { checkSessionValid } from "./HelperHttpFunctions";


export const MustBeLoggedOut = (props) => {

  const [valid, setValid] = useState(false);

  useEffect(()=>{
    checkSessionValid()
    .then(response => response.json())
    .then(jsonResponse=>{
      setValid(jsonResponse);
    });
  });

  if(!valid){
    return props.children;
  }
  else{
    return <Navigate to="../game" replace/>  
  }
}