import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Item(props) {
    let toggledisplay = (event, val) => {
        let i = event.target.id.split('-')[1]
        console.log(val);
        document.getElementById('editform-' + i).classList.toggle('hidden');
        document.getElementById('titleinp-'+i).value = val[0];
        document.getElementById('calinp-'+i).value = val[1];
    }
    let edit = event =>{
    }
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
                        <button onClick={props.delfun} id={i}>Delete</button>
                        <button onClick={(event => toggledisplay(event,value))} id={"edit-" + i}>Edit</button>
                    </div>
                    <div id={'editform-' + i} className={'editform hidden'}>
                        <input id={'titleinp-' + i} />
                        <input id={'calinp-' + i} />
                        <button onClick={(event) => {
                            props.editfun(event);
                            toggledisplay(event, value);
                        }} id={"done-" + i}>
                        </button>
                    </div>

                </div>
            )
        )
    )
}

function Body() {
    const [calArray, setCalArray] = useState([['burger', '500'],["pizza","23"]]);
    let tit;
    let cal;
    let removeArr = (event) => {
        setCalArray(calArray.filter((item, i) => {
            return "" + i !== event.target.id;
        }));
    }
    let updateArr = (event) => {
        let arr = [...calArray];
        let i = event.target.id.split("-")[1];
        arr[i] = [document.getElementById('titleinp-' + i).value, document.getElementById('calinp-' + i).value];
        setCalArray(arr);
    }
    let settits = event => {
        tit = (event.target.value);
        console.log("inout");
    }
    let setcals = event => {
        cal = (event.target.value);
    }
    let insertInArr = (event) => {
        if (document.getElementById('title_inp').value !== "" && document.getElementById('cal_inp').value !== "") {
            setCalArray([...calArray, [tit, cal]]);
            document.getElementById('title_inp').value = "";
            document.getElementById('cal_inp').value = "";
        } else {
            alert("empty Strings")
        }

    }
    return (
        <div className='container'>
            <div className='form'>
                <input id="title_inp" type="text" onChange={settits}/>
                <input id="cal_inp" type="number" onChange={setcals}/>
                <button onClick={insertInArr}>Submit</button>
            </div>
            <Item calArray={calArray} delfun={removeArr} editfun={updateArr}/>
        </div>
    )
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
