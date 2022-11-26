import React from "react";
import { CompC } from "./CompC";

export const CompB = (props) => {
  return (
    <>
      <div>CompB- midName={props.midName}</div>
      <CompC lastname={props.lastname}/>
     
    </>
  );
};
