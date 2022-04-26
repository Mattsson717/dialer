import React, { useState } from 'react';

function App() {
  const [digit, setDigit] = useState('');
  const [sum, setSum] = useState('');

  const updateDisplay = (value) => {
    setDigit(digit + value);
  };

  const dialBtns = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => updateDisplay(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  let value = document.getElementById('output').value,
    total = sum;

  const sumDigits = () => {
    while (value) {
      total += value % 10;
      value = Math.floor(value / 10);
    }
    let result = document.getElementById('output');
    result.value = total;
  };

  const calculate = () => {
    setSum(sumDigits(total).toString());
  };

  return (
    <main>
      <section className='dialer'>
        <div className='display'>
          <form>
            <input type='text' value={digit} id='output' readOnly></input>
          </form>
        </div>
        <div className='operator'>
          <button onClick={() => updateDisplay({ calculate })}>
            SUM IT UP
          </button>
          <button onClick={() => updateDisplay('0')}>CLEAR</button>
        </div>
        <div className='digits'>
          {dialBtns()}
          <button onClick={() => updateDisplay('*')}>*</button>
          <button onClick={() => updateDisplay('0')}>0</button>
          <button onClick={() => updateDisplay('#')}>#</button>
        </div>
      </section>
    </main>
  );
}

export default App;
