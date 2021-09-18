import React, {FC, ReactElement} from 'react';
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const App: FC = (): ReactElement => {
  return (
    <div className="app">
      <NavBar/>
      <Main/>
    </div>
  );
}

export default App;
