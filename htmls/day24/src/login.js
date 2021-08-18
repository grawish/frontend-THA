import React from 'react';
import {Redirect} from "react-router-dom";

function Login({authorised ,toggleAuthorised}) {
  if (authorised){
    return <Redirect to='/'/>;
  }
  return (
    <button onClick={toggleAuthorised}>Login</button>
  );
}

export default Login;