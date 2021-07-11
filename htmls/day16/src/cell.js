import React from "react";
import './cell.css';

function Cell(props) {
    return(
        <div className={'cell '+props.className}>
        </div>
    );
}

export default Cell;