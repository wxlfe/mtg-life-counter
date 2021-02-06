import React from 'react'

const CounterAdder = ({ setCounters, color }) => {
    return (
        <button className={`btn ${color}`} onClick={setCounters}><h1>+</h1></button>
    )
}

export default CounterAdder
