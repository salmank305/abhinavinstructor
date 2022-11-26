import React from 'react'
import { useState } from 'react'

export default function ArrayAsStates() {
    const [numbers, setNumbers] = useState([1,2,3,4,5]);

    const addValue = () => {
        // numbers.push(10);
        // [1, 2, 3, 4, 5, 10]
        console.log('values', numbers);
        setNumbers([...numbers, 10]);
    }

  return (
    <div>
        <h1>ArrayAsStates</h1>
        <div>array values: {numbers.join(',')}</div>
        <button onClick={addValue} >addValues</button>
    </div>
  )
}