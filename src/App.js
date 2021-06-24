import './App.css';
import React, { useState} from "react"; 
import Parant from './Parant'
import counterContext from './CounterContext';
function App() {
     const counter = useState(0)

  return (
    <counterContext.Provider value={counter} >
    <div className="App">
      <Parant />
    </div>     
    </counterContext.Provider>
  );
}

export default App;