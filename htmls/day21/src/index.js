import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Item(props) {
    return (
        props.calArray.map((value, i) => (
                <div className='component' key={i}>
                    <h1>
                        {value[0]}
                    </h1>
                    <div className='flex'>
                        <p>
                            {'You consumed ' + value[1] + ' cals today.'}
                        </p>
                        <button onClick={props.delfun} id={props.index}>Delete</button>
                    </div>
                </div>
            )
        )
    )
}

function Body() {
    const [calArray, setCalArray] = useState([['1', '2']]);
    let tit;
    let cal;
    let removeArr = (event) => {
        setCalArray(calArray.filter((item, i) => {
            return "" + i !== event.target.id;
        }));
    }
    let settits=event=>{
        tit=event.target.value
    }
    let setcals=event=>{
        cal=event.target.value;
    }
    let insertInArr = (event) => {
        setCalArray(() => {
            let arr = calArray;
            arr.push([tit, cal]);
            return (arr);
        });
    }
    useEffect(()=>{
        setCalArray(calArray);
    },[calArray])
    return (
        <div className='container'>
            <div className='form'>

                    <input name="title_inp" type="text" onInput={settits}/>
                    <input name="cal_inp" type="number" onInput={setcals}/>
                    <button onClick={insertInArr}>Submit</button>

            </div>
            <Item calArray={calArray} delfun={removeArr}/>
        </div>
    )
}

// calArray.map((cal_ar, i) => <Item title={cal_ar[0]} desc={cal_ar[1]} index={i} key={i} delfun={removeArr}/>)

ReactDOM.render(
        <Body/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
