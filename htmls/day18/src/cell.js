import React from "react";
import './cell.css';


function Cell(props) {
    if (props.alter === true) {
        return (
            <div className='cell' style={{backgroundColor: props.i % 2 === 0 ? "white" : "black"}}/>
        );
    }
    else {

        return (
            <div className='cell' style={{backgroundColor: props.i % 2 === 0 ? "black" : "white"}}/>
        );

    }
}

export default Cell;