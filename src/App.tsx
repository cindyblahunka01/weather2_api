import React from 'react';
import './App.css';
import Weather from './components/Weather';

//import { Clock } from './components'

let testProp: string = 'Am I getting passed to the Weather component?';
let optionalProp: string = 'You sure are!';

const App: React.FunctionComponent = () => {

  return (
    <div className="App">
      <div className="verticalCenter">
        <Weather testProp={testProp} optionalProp={optionalProp} />
      </div>
    </div>
  );
}

export default App;

