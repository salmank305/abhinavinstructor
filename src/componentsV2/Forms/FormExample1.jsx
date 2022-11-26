import { useState } from "react"

export const FormExample1 = (props) => {

    let userInfo={
        username: '',
        password: ''
    }

   

    // let users = ['abhi', 'abhin', 'abh', 'av', 'abhinav'];

    const getUserName = (e) => {
        // console.log(e.target.value);
        userInfo.username = e.target.value
        console.log('changed');
    }

    const getPassword = (event) => {
        userInfo.password = event.target.value
    }

    const print = (e) => {
        e.preventDefault();
        console.log('userInformation');
        console.log(userInfo);
        // check in the database if the user is available

         // validation logic

        // fetch('https://myai.con', {
        //     method: 'POST',
        //     data: data
        // })
    }


    return (
        <>
            {/* <h3>Login</h3>
            <form>
                <label htmlFor="username">User Name: </label>
                <input type="text" name="username" id = "username" onChange={getUserName}/>
                <br/>  <br/>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={getPassword}/>
                <button onClick={print}>submit</button>
            </form> */}

            <form>
                <label htmlFor="username">user name: </label>
                <input type="text" name="username" id="username" onChange={getUserName}/>
                <br/>  <br/>
                <label htmlFor='passward'> passward: </label>
                <input type="password" name="passward" id="passward"  onChange={getPassword}/>
                <button onClick={print}>submit</button>
            </form>

            <h3>Details</h3>
            <div >Name:</div>
            <div>Password: </div>
        </>
    )
}

// class --> className
// for ---> htmlFor