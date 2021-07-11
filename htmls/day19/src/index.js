import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Counter() {
    const [count, setCount] = useState(0);
    let increment = () => {
        setCount(count+1);
    }
    return (
        <button className='counter' onClick={increment}>{count}</button>
    )
}


ReactDOM.render(
    <React.StrictMode>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
