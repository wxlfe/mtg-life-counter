import React from 'react';
import { useState } from "react";

function Counter(props) {

    const [ count, setCount ] = useState(20);

    let fontColor = 'white';
    if (props.color === 'white'){
        fontColor = 'black';
    }

    return (
        <>
            <div id='counter' style={{display: 'flex', flexDirection: 'row', backgroundColor: props.color, color: fontColor, margin: '1em', padding: '1em', width: 'fit-content', borderRadius: '1em', boxShadow: '0 .1em .5em black'}}>
                <button onClick={() => setCount(count - 1)} style={{borderRadius: '1em', border: '0px', background: 'transparent'}}><h1 style={{color: fontColor}}> - </h1></button>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)} style={{borderRadius: '1em', border: '0px', background: 'transparent'}}><h1 style={{color: fontColor}}> + </h1></button>
            </div>
        </>
    );
}

export default Counter;