import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    setResult(result.concat(e.target.name)); // doing Concatenation 
  }

  const clearHandler = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const totalHandler = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  }
  return (
    <div>
      <div>
        <input type="text" value={result} />
      </div>
      <div className="keypad">
        <button onClick={clearHandler}>clear</button>
        <button onClick={backspace}>C</button>
        <button name="/" onClick={clickHandler}>&divide;</button>
        <button name="1" onClick={clickHandler}>1</button>
        <button name="2" onClick={clickHandler}>2</button>
        <button name="3" onClick={clickHandler}>3</button>
        <button name="*" onClick={clickHandler}>&times;</button>
        <button name="4" onClick={clickHandler}>4</button>
        <button name="5" onClick={clickHandler}>5</button>
        <button name="6" onClick={clickHandler}>6</button>
        <button name="+" onClick={clickHandler}>+</button>
        <button name="7" onClick={clickHandler}>7</button>
        <button name="8" onClick={clickHandler}>8</button>
        <button name="9" onClick={clickHandler}>9</button>
        <button name="-" onClick={clickHandler}>&ndash;</button>
        <button name="0" onClick={clickHandler}>0</button>
        <button name="." onClick={clickHandler}>.</button>
        <button onClick={totalHandler}>=</button>
      </div>
    </div>
  );
}

export default App;
