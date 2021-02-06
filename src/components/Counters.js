import React, { useState } from 'react'
import Counter from './Counter'
import CounterAdder from './CounterAdder'

const Counters = () => {

    const defaultState = [
        {
            color: 'white',
        },
        {
            color: 'red',
        },
    ]
    
    const [ counters, setCounters ] = useState(defaultState);

    const colors = ['white', 'blue', 'black', 'red', 'green'];
    
    return (
        <>
            {counters.map((counter, index) => (<Counter key={index} color={counter.color}/>))}
            {colors.map((color, index) => (<CounterAdder key={index} setCounters={setCounters} color={color}/>))}
        </>
    )
}

export default Counters
