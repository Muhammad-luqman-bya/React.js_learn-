import React, { useContext } from 'react'
import counterContext from './CounterContext';

const Child = () => {
    
    let counterValue = useContext(counterContext)
    console.log(counterValue);
   
    return(
        <div>
            <h2>Increament Function</h2>
            <h4>Increament Amount is {counterValue[0]}</h4>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>Increament btn</button>
        </div>
    )
} 
export default Child;