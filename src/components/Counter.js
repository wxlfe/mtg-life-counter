import React from 'react';
import { useState } from "react";
import {BsBrush} from 'react-icons/bs';

function Counter() {

    const [ count, setCount ] = useState(20);

    const [ color, setColor ] = useState('white');

    let fontColor = 'white';
    if (color === 'white'){
        fontColor = 'black';
    }

    return (
        <>
            <div id='counter' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: color, color: fontColor, margin: '1em', padding: '1em', width: 'fit-content', borderRadius: '1em', boxShadow: '0 .1em .5em black'}}>
                <div id='counter-color' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <button onClick={() => setColor(prompt('What color would you like to make this counter?'))} style={{borderRadius: '1em', border: '0px', background: 'transparent'}}><BsBrush style={{color: fontColor}}/></button>
                </div>
                <div id='counter-body' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <button onClick={() => setCount(count - 1)} style={{borderRadius: '1em', border: '0px', background: 'transparent'}}><h1 style={{color: fontColor}}> - </h1></button>
                    <h1>{count}</h1>
                    <button onClick={() => setCount(count + 1)} style={{borderRadius: '1em', border: '0px', background: 'transparent'}}><h1 style={{color: fontColor}}> + </h1></button>
                </div>
                <div id='counter-label' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <input type='text' placeholder='Counter' style={{background: color, color: fontColor, width: 'min-content', border: '0px transparent', textAlign: 'center'}}></input>
                </div>
            </div>
        </>
    );
}

export default Counter;