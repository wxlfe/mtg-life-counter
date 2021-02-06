import React from 'react';
import './App.css';
import Counters from './components/Counters';

function App() {
  return (
    <>
      <div className="App" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100vw', justifyContent: 'center'}}>
        <Counters/>
      </div>
    </>
  );
}

export default App;
