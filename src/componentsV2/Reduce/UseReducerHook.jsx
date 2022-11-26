import React from 'react'
import { useState } from 'react';
import { useReducer } from 'react'

export const UseReducerHook = () => {
    const reducerFunction = (iniValue, action) => {
        console.log('inside reducer function');
        console.log('iniValue', iniValue);
        console.log('action', action);

        if(action === 'add'){
            return iniValue+10
        } else if(action === 'sub'){
            return iniValue-10
        }else if(action === 'mul10'){
            return iniValue*10
        }else if(action === 'mul20'){
            return iniValue*20
        }
        // division , squareRoot, module, percent

        return iniValue

        // return  // 1. 200+10 = 210 2.210+10 = 220 3. 220+10 = 230
    }

    const initialValue = 150;

    // useReducer is a hook hence you can treat it like a function
    // useReducer takes two arguments 
    // 1. callback function 2. initial value
    // useReducer returns two things
    // 1. value ---> initialized with the value we passed while calling useReducer
    // 2. dispatch function ---> which wil be used to update the value

    // when we call dispatch function the callback function that we passed while creating
    // useReducer that gets called
    // the argument to the callback functions are -
    // 1. initial value that we passed while creating useReducer
    // 2. the argument that we passed while calling dispatch function

    const [number, dispatchNumber] = useReducer(reducerFunction, 200)

    // setNumber 1 takes argument as the updated value
    const [number1, setNumber1] = useState(50);

  return (
    <>
        <div>UseReducerHook</div>
        <div>Number: {number}</div>
        <button onClick={() => dispatchNumber('adds')}>UR+</button>
        <button onClick={() => dispatchNumber('sub')}>UR-</button>
        <button onClick={() => dispatchNumber('mul10')}>UR*10</button>
        <button onClick={() => dispatchNumber('mul20')}>UR*20</button>

        <div>Number1: {number1}</div>
        <button onClick={() => setNumber1(number1+5)}>US+</button>
        <button onClick={() => setNumber1(number1-5)}>US-</button>
    </>
  )
}

// const myFun = (initialValue,currentValue) => {
//     console.log('initialValue', initialValue);
//     console.log('currentValue', currentValue);
//     console.log('');
//     return initialValue+currentValue
// }


// let arr = [9,24,5]
// let res= arr.reduce(myFun, 10)
// console.log(res);