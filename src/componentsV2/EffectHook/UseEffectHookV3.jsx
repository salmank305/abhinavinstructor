import React, { useEffect } from "react";

export const UseEffectHookV3 = () => {
  // created some timer ---> setTimeout
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("running");
    }, 1000);
    let timer = setTimeout(() => {
      console.log("timer");
    }, 2000);
    console.log("running effect v3");
    // this function will run when component gets removed from dom
    return () => {
      // cleanup activity for setInterval
      clearInterval(interval);
      clearTimeout(timer);
      console.log("cleaning up first");
      console.log("cleaning up second");
    };
  }, []);

  return <div>UseEffectHookV3</div>;
};
