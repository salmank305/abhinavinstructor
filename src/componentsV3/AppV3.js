import React, { createContext } from "react";
import { LeftParent } from "./LeftTree/LeftParent";
import { RigthParent } from "./RightTree/RigthParent";

// step 1. create a context
// const nameContext = React.createContext()
export const NameContext = createContext();
export const AppV3 = () => {
  let studentDetails = "studentDetails";
  let name = "salman";
  let midName = "Ibrahim";
  let lastname = "khatik";

  //value of context
  let role = "student";

  return (
    <>
      <h1>Data Passed By The props Drilling Method</h1>
      <h1>AppV3</h1>
      <LeftParent studentDetails={studentDetails} name={name} midName={midName} lastname={lastname} />

      {/* step 2. provide the context  with value*/}
      <h1>Data Passed By Contest</h1>
      <NameContext.Provider value={role}>
        <RigthParent />
      </NameContext.Provider>
    </>
  );
};
