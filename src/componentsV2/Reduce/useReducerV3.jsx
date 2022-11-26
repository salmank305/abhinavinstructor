import React, { useReducer } from 'react'
import { useState } from 'react'

export const UseReducerV3 = () => {
    const [number1, setNumber1] = useState(0);
    const reducer = (ini, action) => {
        if(action === 'add') {
            return ini+5;
        }
        return ini
    }
    const addNo1ThreeTimes = () => {
        // setNumber1(number1+5);
        // setNumber1(number1+5);
        // setNumber1(number1+5);

        setNumber1((number) => number+5);
        setNumber1((number) => number+5);
        setNumber1((number) => number+5);
    }

    // in useReducer the state is updated based on previous state by default
    const addNo1ThreeTimesForDis = () => {
        dispatchNo2('add')
        dispatchNo2('add')
        dispatchNo2('add')
    }


    const [number2, dispatchNo2] = useReducer(reducer, 0)
  return (
    <>
        <div>useReducerV3</div>
        <div>Number 1: {number1}</div>
        <button onClick={() => setNumber1(number1+5)}>+no1</button>
        <button onClick={addNo1ThreeTimes}>+no1 3 times</button>
        <br/>
        <div>Number 2: {number2}</div>
        <button onClick={() =>dispatchNo2('add')}>+no2</button>
        <button onClick={addNo1ThreeTimesForDis}>+no1 3 times for dis</button>
    </>
  )
}
