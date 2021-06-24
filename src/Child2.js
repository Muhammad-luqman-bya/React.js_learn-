import React, { useReducer } from 'react'
import { hydrate } from 'react-dom'
import CounterReducer from './CounterReducer'


const Child2 = () =>{
    
    const [state, dispatch] = useReducer(CounterReducer , 0 )
    console.log(state)
    return(
        <div>
            <h2>Counter is created by Reducer </h2>
            <h4>No of Counts: {state}</h4>
            <button onClick={()=> dispatch('luqman')}>Incremant by Reducter</button>
        </div>
    )
}
export default Child2;