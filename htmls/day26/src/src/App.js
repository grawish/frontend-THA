import './App.css';
import {useState} from "react";
import Form from "./form";
import Viewer from "./viewer";

function App() {
  const [user, setUser] = useState({username: '', email: ''});
  return (
    <div className="app">
      <Form/>
      <Viewer/>
    </div>
  );
}

export default App;

