import React from 'react'
import Counter from './Counter'
import CounterAdder from './CounterAdder'

const Counters = ({ counters, addCounter, removeCounter }) => {

    const final = [];

    for (let i = 0; i < counters; i++) {
        final.push(<Counter key={i} />);
    }

    final.push(<CounterAdder addCounter={addCounter} removeCounter={removeCounter} />);

    return (
        <>
            {final}
        </>
    )
}

export default Counters
