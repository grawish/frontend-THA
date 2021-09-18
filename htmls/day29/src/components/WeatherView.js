import {useDispatch, useSelector} from "react-redux";

import {setWeatherLocation, setWeatherData} from "../redux/weather";

function InputForm() {
  const weatherData = useSelector(state => state.weather.data)
  const dispatch = useDispatch()
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