import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./board";
import Card from "./card";


ReactDOM.render(
    <React.StrictMode>
        <Board/>
        <Card/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
