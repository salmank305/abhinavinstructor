import React, { useContext } from "react";
import { Learning } from "./RigthParent";
export const CompZ = () => {
  const LearningValue = useContext(Learning);
  return (
    <>
      <div>CompZ</div>
      <div>Learnig={LearningValue}</div>
    </>
  );
};
