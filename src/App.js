import React, {useState} from 'react'
import './App.css'


const App = () =>{
  const [result,setResult]=useState("")

  const clearInput=()=>{
    setResult("");
  }
  const handleClick=(event)=>{
    setResult(result.concat(event.target.name))
  }
  const backspace=(event)=>{
    setResult(result.slice(0,-1))
  }
  const calculate=()=>{
      setResult(eval(result))
  }
  return(
    <div className="container">
      <br/><br/><br/>
      <h1>Calculator by Rizwan Sayyed</h1>
        <div className="calculator">
          <form>
            <input type="text" value={result}></input>
          </form>
          <br/>
          <button onClick={clearInput}>Clear</button>
          <button onClick={backspace}>DEL</button>
          <button name="%" onClick={handleClick}>%</button>
          <button name="/" onClick={handleClick}>&divide;</button>
          <br />
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button name="*" onClick={handleClick}>&times;</button><br/>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button name="-" onClick={handleClick}>&ndash;</button><br/>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button name="+" onClick={handleClick}>+</button><br/>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>
          
          <button id ="equal" onClick={calculate}>=</button>
        </div>
        <p>Copyright © 2022</p>
    </div>
  )
}


export default App;