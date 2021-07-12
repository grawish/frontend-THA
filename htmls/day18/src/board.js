import React from "react";
import './board.css';
import Row from "./row";
import Cell from "./cell";


function Board() {
    let x = 0;
    let alter=true;
    return (
        <div className='board'>
            <div className='frame'>
                {
                    [...Array(64)].map((x,i) => {
                        if (i % 8 === 0 && i !== 0) {
                            alter=!alter;
                        }
                        return <Cell alter={alter} i={i}/>
                    })
                }

            </div>
        </div>
);
}

export default Board;