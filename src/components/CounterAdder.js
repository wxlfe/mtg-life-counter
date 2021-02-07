import React from 'react'
import {BsPlusCircle, BsSubtract} from 'react-icons/bs'

const CounterAdder = ({ addCounter, removeCounter }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <button style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', color: 'black', margin: '1em', padding: '1em', width: 'inherit', borderRadius: '1em', boxShadow: '0 .1em .5em black'}} onClick={addCounter}><h1><BsPlusCircle/></h1></button>
            <button style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', color: 'black', margin: '1em', padding: '1em', width: 'inherit', borderRadius: '1em', boxShadow: '0 .1em .5em black'}} onClick={removeCounter}><h1><BsSubtract/></h1></button>
        </div>
    )
}

export default CounterAdder
