import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Item(props) {
    return (
        props.calArray.map((value,i)=>
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
}

function Body() {
    const [calArray, setCalArray] = useState([[1, 2]]);
    let removeArr = (event) => {
        setCalArray(calArray.filter((item, i) => {
            return "" + i !== event.target.id;
        }));
    }
    let insertInArr = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        setCalArray(()=>{
            let arr=calArray;
            arr.push([event.target[0].value,event.target[1].value]);
            return(arr);
        });
    }

    return (
        <div className='container'>
            <div className='form'>
                <form id="initialform" target="#" onSubmit={insertInArr}>
                    <input name="title_inp" type="text" />
                    <input name="cal_inp" type="number" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Item calArray={calArray} delfun={removeArr}/>
        </div>
    );
}

// calArray.map((cal_ar, i) => <Item title={cal_ar[0]} desc={cal_ar[1]} index={i} key={i} delfun={removeArr}/>)

ReactDOM.render(
    <React.StrictMode>
        <Body/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
