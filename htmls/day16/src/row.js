import React from "react";
import './row.css';
import Cell from "./cell";

function Row(props) {
    return(
        <div className={'row '+props.className}>
            <Cell className='white'/>
            <Cell className='black'/>
            <Cell className='white'/>
            <Cell className='black'/>
            <Cell className='white'/>
            <Cell className='black'/>
            <Cell className='white'/>
            <Cell className='black'/>
        </div>
    )
}
export default Row;