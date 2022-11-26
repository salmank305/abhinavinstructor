import React from "react";
import { CompA } from "./CompA";

export const LeftParent = (props) => {
  return (
    <>
      <h2>LeftParent-{props.studentDetails}</h2>
      <CompA name={props.name} midName={props.midName} lastname={props.lastname} />
    </>
  );
};
