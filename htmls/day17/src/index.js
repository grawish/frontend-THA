import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Item(props) {
    return (
        <div className='component'>
            <h1>
                {props.title}
            </h1>
            <p>
                {'You consumed ' + props.desc + ' cals today.'}
            </p>
        </div>
    )
}

let cal_array = Array(5);
cal_array = [
    ['Burger', 69],
    ['celery', 5],
    ['maggi', 200],
    ['fried rice', 500],
    ['fried rice', 500]
]

ReactDOM.render(
    <React.StrictMode>
        <div className='container'>
            {
                cal_array.map(cal_ar => <Item title={cal_ar[0]} desc={cal_ar[1]}/>)
            }
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
