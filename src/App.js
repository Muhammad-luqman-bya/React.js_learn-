import './App.css';
import React from "react"; 
import SecClass from './SecClass';
function App() {
  return (
    <div className="App">
      <h3>We use Props within parent and child system  </h3>
      <SecClass class="10th class Exam" time="21th" />
      <br />
      <hr/>
      <SecClass class="11th class Exam"  time="22th" /> 
      <br />
      <hr/>
      <SecClass class="12th class Exam"  time="23th" /> 
      <br />
      <hr/>
    </div>     
  );
}

export default App;