import { useEffect } from "react";
import { useState } from "react"

export const UseEffectHookV2 = () => {
    const [name, setName]  = useState('default');
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count+1);
    }, [])

    useEffect(() => {
        // fetch will return a promise
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((data) => {
            console.log('getting data');
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <div>UseEffectHookV2</div>
            <div>Name: {name}</div>
            <button onClick={() => setName('Abhinav')}>update name</button>
            <div>Name: {count}</div>
            {/* <button onClick={() => setName('Abhinav')}>update name</button> */}
        </>
    )
}