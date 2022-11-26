import React, { useReducer } from 'react'

export const UseReducerV2 = () => {
    const reducerFun = (initial, action) => {
        if(action.opr === 'add'){
            return initial+action.val
        } else if(action.opr === 'sub'){
            return initial-action.val
        }
    }
    const [number, dispatch] = useReducer(reducerFun, 100);
  return (
    <>
         <div>useReducerV2</div>
         <div>Number: {number}</div>
         <button onClick={() => dispatch({opr: 'add', val: 10})}>+</button>
         <button onClick={() => dispatch({opr: 'add', val: 20})}>+20</button>
         <button onClick={() => dispatch({opr: 'sub', val: 20})}>-20</button>
    </>
   
  )
}
