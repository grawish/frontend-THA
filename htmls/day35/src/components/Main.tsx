import React from 'react'
import './styles/main.scss'
import Posts from "./Posts";
import Options from "./Options";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <Posts/>
        <Options/>
      </div>
    </div>
  );
};

export default Main;
