import './App.css';
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Dashboard from "./Dashboard";
import Login from "./login";
import {Switch, HashRouter as Router, Route} from "react-router-dom";
import {useState} from "react";

function App() {
  const [authorised,setAuthorised]=useState(false);
  const toggleAuthorised = () =>{
    setAuthorised(!authorised);
  }
  return (
    <div className={'App'}>
      <Router>
        <Navbar/>
        {/*<Switch>*/}
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={About}/>
          <Route path='/dashboard' exact component={()=><Dashboard authorised={authorised} toggleAuthorise={toggleAuthorised}/>}/>
          <Route path='/login' exact component={()=><Login toggleAuthorised={toggleAuthorised} authorised={authorised}/>}/>
        {/*</Switch>*/}
      </Router>
    </div>
  );
}

export default App;
