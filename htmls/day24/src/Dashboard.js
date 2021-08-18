import React from 'react';
import {Redirect} from "react-router-dom";

function Dashboard({authorised, toggleAuthorise}) {
  if (!authorised){
    return <Redirect to='/login'/>;
  }
  return (
    <div>
      Dashboard
      <br/>
      <button onClick={toggleAuthorise}>Logout</button>
    </div>
  );
}

export default Dashboard;