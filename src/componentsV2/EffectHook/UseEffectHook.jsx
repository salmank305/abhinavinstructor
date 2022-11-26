import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function UseEffectHook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);

  // use to handle the side effects
  // useEffect is a hook hence it is a function
  // useEffect also takes a callback function
  // calls the callback function on every render ---> first time as well as every other rerender
  // useEffect always get the updated state value

  // useEffect(() => {
  //   console.log('count', count);
  //   // make api call
  //   // fetch('https://someApi.com')
  //   setTimeout(() => {
  //     console.log('from timer');
  //   },0)
  //   console.log('running use effect 1');
  // })

  // useEffect(() => {
  //   // make api call
  //   // fetch('https://someApi.com')
  //   console.log('running use effect 2');
  // })

  console.log('re rending');

const add = () => {
  setCount1(count1+1)
  // console.log('count fromm add', count);
}

// useEffect was taking one argument which was callback fun
// but now we are passing 2nd argument as array
// dependency array
// running use Effect only once for the first time render
// dependency array ---> as 2nd argument

useEffect(() => {
  console.log('count from useEffect 1', count1);
})

useEffect(() => {
  console.log('count from useEffect 2', count1);
}, [])

useEffect(() => {
  console.log('count from useEffect 3', count1);
}, [count1])


  // make an api call when this component loads
  return (
    <>
      <div>UseEffectHook</div>
      <div>Count1: {count1}</div>
      <button onClick={add}>+</button>
      <div>Count2: {count2}</div>
      <button onClick={() => setCount2(count2+1)}>+</button>
    </>
  )
}
