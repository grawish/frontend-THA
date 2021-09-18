import React, {FC, ReactElement, useState} from 'react';
import './App.css';

interface AppProps {
    heading: string
}

const App : FC<AppProps> = ({heading}) : ReactElement => {
    const [count, setCounter] = useState<number>(0)
  return (
      <div className="App">
        <h1>
          Hello {heading}
        </h1>
          <button onClick={()=>{
              setCounter(count + 1)
          }} className="button">
              {count}
          </button>
      </div>
  );
}

export default App;
