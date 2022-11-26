import React, { createContext } from "react";
import { CompX } from "./CompX";

export const Learning =createContext();
export const RigthParent = () => {
  return (
    <>
      <div>RigthParent</div>

     <Learning.Provider value={'Learing React'}>
        <CompX/>
     </Learning.Provider>
    </>
  );
};
