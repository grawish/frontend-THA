import {useDispatch, useSelector} from "react-redux";

import {setWeatherLocation, setWeatherData} from "../redux/weather";

function InputForm() {
  const location = useSelector(state => state.weather.location)
  const dispatch = useDispatch()
  const onClickSearch = () => {
    if (!location)
      return
    dispatch(setWeatherData(location))
  }
  return (
    <div className={"form"}>
      <input type = "text" value = {location} onChange={(e)=>dispatch(setWeatherLocation(e.target.value))}/>
      {" "}
      <button onClick={onClickSearch}>
        Search
      </button>
    </div>
  );
}

export default InputForm;