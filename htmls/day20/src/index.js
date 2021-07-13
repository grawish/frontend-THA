import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Item(props) {
    return (
        <div className='component'>
            <h1>
                {props.title}
            </h1>
            <div className='flex'>
                <p>
                    {'You consumed ' + props.desc + ' cals today.'}
                </p>
                <button onClick={props.delfun} id={props.index}>Delete</button>
            </div>
        </div>
    )
}

function Body() {
    const [calArray, setCalArray] = useState([
        ["burger", 69],
        ["pizza", 69],
        ["gol gappe", 69],
        ["tikki", 69],
        ["bhalle papdi", 69]
    ]);
    let removeArr = (event) => {
        setCalArray(calArray.filter((item, i) => {
            return "" + i !== event.target.id;
        }));
    }

    return (
        <div className='container'>
            {
                calArray.map((cal_ar, i) => <Item title={cal_ar[0]} desc={cal_ar[1]} index={i} key={i}
                                                  delfun={removeArr}/>)
            }
        </div>
    );
}


ReactDOM.render(
    <React.StrictMode>
        <Body/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
