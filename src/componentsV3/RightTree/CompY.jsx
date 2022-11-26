import React, { useContext } from "react";
import { NameContext } from "../AppV3";
import { CompZ } from "./CompZ";
import { Learning } from "./RigthParent";
export const CompY = () => {
  // use the context using useContext
  const nameValue = useContext(NameContext);
  const LearningValue = useContext(Learning);
  return (
    <>
      <div>CompY</div> 
      <div>Role={nameValue}</div>
      <div>Learnig={LearningValue}</div>
      <CompZ />
    </>
  );
};
