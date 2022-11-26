import { useState } from "react"

export const FormExample2 = () => {

    const [user, setUser] = useState({
        username:'default',
        password: 'default'
    });

    const [show, setShow]  = useState(false);

    const updateUser = (e) => {
        // if(e.target.id === 'username'){
        //     setUser({...user, username: e.target.value});
        // }else if(e.target.id === 'password'){
        //     setUser({...user, password: e.target.value});
        // }
        setUser({...user, [e.target.id]: e.target.value});
    }

    const print = (e) => {
        setShow(true)
        e.preventDefault();
        console.log(user);
    }
    console.log('rendering');

    // controlled way of handling components
    // uncontrolled way of handling components --> using refs
    return (
       <>
        <form>
            <label htmlFor="username">User Name: </label>
            <input type="text" name="username" id="username" value={user.username} onChange={updateUser}/>
            <br/>  <br/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" value={user.password} onChange={updateUser}/>
            <br/>  <br/>
            <button onClick={print}>submit</button>
        </form>

        {show && <section>
            <div>Name: {user.username}</div>
            <div>password: {user.password}</div>
        </section>
        }

    
       </>
    )
}