import React from 'react';
import {useSelector} from "react-redux";

function Viewer(props) {
  const name = useSelector(state => state.updateReducer.name);
  const email = useSelector(state => state.updateReducer.email);
  console.log(name, email);
  return (
    <div className='viewer'>
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  );
}

export default Viewer;