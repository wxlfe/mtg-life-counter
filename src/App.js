import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <div className="App" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100vw', justifyContent: 'center'}}>
        <Counter color="white"></Counter>
        <Counter color="blue"></Counter>
        <Counter color="black"></Counter>
        <Counter color="green"></Counter>
        <Counter color="red"></Counter>
      </div>
    </>
  );
}

export default App;
