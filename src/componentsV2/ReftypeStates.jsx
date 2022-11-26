import { useState } from "react"

export const RefTypeState = () => {

    // const [name, setName] = useState('Dummy name')
    // const [address, setAddress] = useState('Dummy address')
    // const [role, setRole] = useState('Dummy role')

    let user = {
        name: 'dummy name',
        address: 'Dummy address',
        role: 'Dummy role'
    }

    const [userInfo, setUserInfo] = useState(user);

    const updateName = () => {
        // userInfo ==> 'Abhinav'
        setUserInfo(
            {
                ...userInfo,
                // address: 'Dummy address',
                // role: 'Dummy role',
                name: 'Abhinav', 
            }
        );
    }

    const updateAddress = () => {
        // userInfo ==> 'Abhinav'
        setUserInfo(
            {
                ...userInfo,
                // address: 'Dummy address',
                // role: 'Dummy role',
                // name: 'Abhinav',
                address: 'India',
            }
        );
    }

    const updateRoleAndName = () => {
        setUserInfo(
            {
                ...userInfo,
                name: 'Virat',
                role: 'cricketer',
            }
        );
    }



    return (
        <>
        <h3>User Info</h3>

        <div>Name: {userInfo.name}</div>
        <div>Address: {userInfo.address}</div>
        <div>role: {userInfo.role}</div>

        <button onClick={updateName}>update Name</button>
        <button onClick={updateAddress}>update Address</button>
        <button onClick={() => setUserInfo(
            {
                ...userInfo,
                name: 'Virat',
                role: 'cricketer',
            }
        )}>update role and Name</button>
        </>
    )
}