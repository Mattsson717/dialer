import React from 'react';

import './App.css';

function App() {
  const dialBtns = () => {
    const numbers = [];

    for (let i = 1; i < 10; i++) {
      numbers.push(<button key={i}>{i}</button>);
    }
    return numbers;
  };
  return (
    <main>
      <section className='dialer'>
        <div className='display'></div>
        <div className='digits'>
          {dialBtns()}
          <button>0</button>
          <button>*</button>
          <button>#</button>
        </div>
        <div>
          <button>=</button>
        </div>
      </section>
    </main>
  );
}

export default App;
