import './App.scss';
import InputForm from "./components/InputForm";
import WeatherView from "./components/WeatherView";
import {useSelector} from "react-redux";


function App() {
  const theme = useSelector(state => state.theme)
  return (
    <div className={`App ${theme ? "light" : "dark"}`}>
      <InputForm/>
      <WeatherView/>
    </div>
  );
}

export default App;
