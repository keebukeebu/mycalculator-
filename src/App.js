import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [result, setResult] = useState("");

const handleclick = (e) => {
  setResult(result.concat(e.target.name));

}
const clear =() => {
  setResult("");
}

const back = () => {
  setResult(result.slice(0, result.length -1));
}

const calculate = () => {
  setResult(eval(result))

}

  return (
    <div>
      <div className="wrapper">
        <form>
          <input type="text" value={result} />
        </form>

        <div className="keys">
          <button onClick={clear} id="clear">AC</button>
          <button onClick={back} id="back">C</button>
          <button name= "*" onClick={handleclick} id="times">&times;</button>
          <button name= "3" onClick={handleclick}>3</button>
          <button name= "2" onClick={handleclick}>2</button>
          <button name= "1" onClick={handleclick}>1</button>
          <button name= "-" onClick={handleclick} id="dash">&ndash;</button>
          <button name= "4" onClick={handleclick}>4</button>
          <button name= "5" onClick={handleclick}>5</button>
          <button name= "6" onClick={handleclick}>6</button>
          <button name= "/" onClick={handleclick} id="divide">&divide;</button>
          <button name= "8" onClick={handleclick}>8</button>
          <button name= "9" onClick={handleclick}>9</button>
          <button name= "7" onClick={handleclick}>7</button>
          <button name= "+" onClick={handleclick} id="add">+</button>
          <button name= "0" onClick={handleclick}>0</button>
          <button name= "." onClick={handleclick}>.</button>
          <button onClick={calculate} id="result">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
