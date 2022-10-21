import React, {useState} from 'react';
import './App.css';
import Balloon from "./Balloon/Balloon";

function App() {
  const [numbers, setNumbers] = useState<number[]>([]);

  function generateSortedRandomArray() {
    const array: number[] = [];
    const range = 5;

    const getRandom = (memo: number[]): number => {
      const pos = Math.floor(Math.random() * (36 - 5) + 5);
      if (memo.includes(pos)) {
        return getRandom(memo);
      } else {
        return pos;
      }
    }

    for (let i = 0; i < range; i++) {
      array.push(getRandom(array))
    }
    array.sort((a, b) => a - b);
    return array
  }

  const changeNumber = () => {
    setNumbers(generateSortedRandomArray())
  }

  return (
    <div className="App">
      <div>
        <button onClick={changeNumber} className="button-82-pushable">
          <span className="button-82-shadow"></span>
          <span className="button-82-edge"></span>
          <span className="button-82-front text"> New Numbers</span>
        </button>
      </div>
      <Balloon number={numbers[0]}/>
      <Balloon number={numbers[1]}/>
      <Balloon number={numbers[2]}/>
      <Balloon number={numbers[3]}/>
      <Balloon number={numbers[4]}/>
    </div>
  );
}

export default App;
