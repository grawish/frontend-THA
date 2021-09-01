import React from 'react';
import {updateName, updateEmail} from "./redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";

function Form(props) {
// const count = useSelector(state => state.updateName);
const dispatch = useDispatch();
  return (
    <div className={'form'}>
    <input placeholder={'name'} onChange={e=>{
      dispatch(updateName(e.target.value));
    }}/>
    <input placeholder={'email'} onChange={e=>{
      dispatch(updateEmail(e.target.value));
    }}/>
    </div>
  );
}

export default Form;