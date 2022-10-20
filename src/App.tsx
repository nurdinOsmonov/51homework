import React, {useState} from 'react';
import './App.css';
import Balloon from "./Balloon/Balloon";

function App() {
  const [numbers, setNumbers] = useState([
    {number: Math.floor(Math.random() * (36 - 5) + 5)},
    {number: Math.floor(Math.random() * (36 - 5) + 5)},
    {number: Math.floor(Math.random() * (36 - 5) + 5)},
    {number: Math.floor(Math.random() * (36 - 5) + 5)},
    {number: Math.floor(Math.random() * (36 - 5) + 5)},
  ])

  const changeNumber = () => {
    setNumbers([
      {number: Math.floor(Math.random() * (36 - 5) + 5)},
      {number: Math.floor(Math.random() * (36 - 5) + 5)},
      {number: Math.floor(Math.random() * (36 - 5) + 5)},
      {number: Math.floor(Math.random() * (36 - 5) + 5)},
      {number: Math.floor(Math.random() * (36 - 5) + 5)},
    ])
  }

  if (numbers[4].number > numbers[3].number &&
    numbers[3].number > numbers[2].number &&
    numbers[2].number > numbers[1].number &&
    numbers[1].number > numbers[0].number) {
  }

  return (
    <div className="App">
      <div>
        <button onClick={changeNumber} className="button-82-pushable">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text">New Numbers</span>
        </button>
      </div>
      <Balloon number={numbers[0].number}/>
      <Balloon number={numbers[1].number}/>
      <Balloon number={numbers[2].number}/>
      <Balloon number={numbers[3].number}/>
      <Balloon number={numbers[4].number}/>
    </div>
  );
}

export default App;
