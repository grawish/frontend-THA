import React from "react";
import './board.css';
import Row from "./row";


function Board() {
    return (
        <div className='board'>
            <div className='frame'>
                <Row className=''/>
                <Row className='reverse'/>
                <Row className=''/>
                <Row className='reverse'/>
                <Row className=''/>
                <Row className='reverse'/>
                <Row className=''/>
                <Row className='reverse'/>
            </div>
        </div>
    );
}

export default Board;