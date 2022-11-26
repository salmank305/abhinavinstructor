import { useState } from "react";
import { FormDetails } from "./FormDetails";

export const SighUpForm = () => {
  let userInfo = {
    // name: '',
    // email: '',
    // address: '',
    // gender:'',
    // mobile: '',
  };

  const [user, setUser] = useState(userInfo);
  const [permanentAddress, setPermanentAddress] = useState(true);

  const getUserInfo = (e) => {
    // switch case
    // if(e.target.id === 'name'){
    //     userInfo.name = e.target.value
    // } else if(e.target.id === 'email'){
    //     userInfo.email = e.target.value
    // }else if(e.target.id === 'address'){
    //     userInfo.address = e.target.value
    // }else if(e.target.id === 'gender'){
    //     userInfo.gender = e.target.value
    // }else if(e.target.id === 'mobile'){
    //     userInfo.mobile = e.target.value
    // }

    // dynamically accessing the property of an object

    userInfo[e.target.id] = e.target.value;

    setUser({ ...userInfo });

    // userInfo[e.target.name]= e.target.value;
    // userInfo.name = abhinav
    // userInfo.email = abhinav@mail
  };

  const createUser = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  const getValue = (val) => {
    console.log(`value recieved is ${val}`);
  };

  // let permanentAddress = '';

  //   const copyValue = (e) => {
  //     // setPermanentAddress(user.address);
  //     // setPermanentAddress();
  //     // permanentAddress = user.address
  //     // console.log(permanentAddress);
  //     // console.log(e.target.checked);
  //     if (e.target.checked) {
  //       setPermanentAddress(user.address);
  //     } else {
  //       setPermanentAddress("");
  //     }
  //   };

  const copyValue = (e) => {
    // setPermanentAddress(user.address);
    // setPermanentAddress();
    // permanentAddress = user.address
    // console.log(permanentAddress);
    // console.log(e.target.checked);
    // if (e.target.id === "yes") {
    //   setPermanentAddress(user.address);
    // } else {
    //   setPermanentAddress("");
    // }

    e.target.id === "yes"
      ? setPermanentAddress(user.address)
      : setPermanentAddress("");
  };

  // when a component re rerenders all its child component also re renders
  return (
    <>
      <form onSubmit={createUser}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={getUserInfo} />
        <br /> <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" onChange={getUserInfo} />
        <br /> <br />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" onChange={getUserInfo} />
        <br /> <br />
        <label htmlFor="gender">Gender</label>
        <input type="text" id="gender" name="gender" onChange={getUserInfo} />
        <br /> <br />
        <label htmlFor="mobile">Mob No</label>
        <input type="text" id="mobile" name="mobile" onChange={getUserInfo} />
        <br /> <br />
        <input type="submit" value="submit" />
      </form>

      <label htmlFor="sameAddress">
        Present Address same as permanent Address
      </label>
      {/* <button onClick={copyValue}>copy address</button> */}
      {/* <input type="checkbox" name="" id="sameAddress" onChange={copyValue}/> */}
      <br />

      <label htmlFor="yes">yes</label>
      <input type="radio" name="radio" id="yes" onChange={copyValue} />

      <label htmlFor="no">no</label>
      <input type="radio" name="radio" id="no" onChange={copyValue} />

      <br />

      <label htmlFor="permanentAddress">Permanent Address</label>
      <input
        type="text"
        name=""
        id="permanentAddress"
        value={permanentAddress}
      />

      <FormDetails name={user.name} chToPar={getValue} />
    </>
  );
};

// function test(cb){
// let a = 10;
// a = 10*30;
//     cb()
// }

// function calculate(){
//     console.log('calculting');
// }
// test(calculate)
