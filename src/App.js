import React, { useState } from 'react';
import './App.css';
import CounterAdder from './components/CounterAdder';
import Counters from './components/Counters';
import Counter from './components/Counter'

function App() {

  const [ counters, setCounters ] = useState(0);

  const addCounter = () => setCounters(counters + 1)

  const removeCounter = () => counters > 0 && setCounters(counters - 1)

  return (
	<>
	  <div className="App" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100vw', justifyContent: 'center'}}>
		<Counters counters={ counters } addCounter={ addCounter } removeCounter={ removeCounter }/>
	  </div>
	</>
  );
}

export default App;
