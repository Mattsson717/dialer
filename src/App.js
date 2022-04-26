import React, { useState } from 'react';

function App() {
  const [digit, setDigit] = useState('');

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

  const calculate = () => {
    setDigit(
      digit
        .replace(/[#*]/gi, '')
        .toString()
        .split('')
        .map(Number)
        .reduce(function (a, b) {
          return a + b;
        }, 0)
    );
  };

  const clearDialer = () => {
    setDigit('');
  };

  return (
    <main>
      <section className='dialer'>
        <div className='display'>
          <form>
            <input type='text' value={digit || '0'} id='output' readOnly />
          </form>
        </div>
        <div className='operator'>
          <button onClick={calculate}>SUM IT UP</button>
          <button onClick={clearDialer}>CLEAR</button>
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
