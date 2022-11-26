import { useState } from "react";

export const Counter = () => {
    // let count = 0;

    // hooks are functions
    // useState is a hook used to maintain states in functional comp
    // it returns a variable and a function
    // the variable is same as the value passed to useState
    // the function is used to update that value

    // updating the value using setNumber will also rerender the component
    // setState is asyncronous call hence doesn't execute immidiately


    // const abc = useState(0);
    // console.log(abc);
    const [no, setNumber] = useState(0);
    const [anotherNo, setAnotherNo] = useState(100);
 
    
    // objects and arrays
    // console.log('no', no);
    // console.log('setNumber', setNumber);
    // console.log(abc);


    const add = () => {
        // count = count+1
        console.log('before adding', no);
        setNumber(no+5); //---> 101
        console.log('after adding', no);
        // no+1
        // console.log('no', no+1);
        console.log('this is end of function');
    }

    const sub = () => {
        setNumber(no-1);
        // count = count-1
        // console.log('count', count);
    }

    // const reset = () => {
    //     setNumber(0)
    // }

    // const addNo2 = () => {
    //     setAnotherNo(anotherNo+1)
    // }

    const SubNo2 = () => {
        setAnotherNo(anotherNo-1)
    }


 
   const [loggedIn, setLoggedIn] = useState("false");
    const login = () => {
        setLoggedIn(!loggedIn);
        final()
  

    }
  
    const [name, setName] = useState("Polo");
    let dataN = "Marco";
    
    function store(e) {
      dataN = e.target.value;
      
    }
    function final() {
      setName(dataN);
    }

  

    return (
        <>
        {/* <div>
            <div>Count 1: {no}</div>
            <button onClick={add}>+no1</button>
            <button onClick={sub}>-no1</button>
            <button onClick={() => setNumber(0)}>reset</button>
        </div> */}
        <br/>
{/* 
        <div>
            <div>Count 2: {anotherNo}</div>
            <button onClick={() => setAnotherNo(anotherNo+1)}>+No2</button>
            <button onClick={SubNo2}>-No2</button>
        </div> */}



        <div>{loggedIn ?  <h1>Marco</h1>:<h1>Polo</h1> }</div>
            
            <button id="marco-polo-toggler" onClick={(login) }  onChange={(e) => store(e)}>{name}</button>
        </>
    )
}