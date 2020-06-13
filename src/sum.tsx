import React from "react";

export const SumComponent: React.FC = () => {
  const [numberA, setNumberA] = React.useState(0);
  const [numberB, setNumberB] = React.useState(0);

  return (
    <>
    <h2>Sum two numbers:</h2>
    <input value={numberA} onChange={(e) => setNumberA(+e.target.value)}/>
    +
    <input value={numberB} onChange={(e) => setNumberB(+e.target.value)}/>
    =
    {numberA + numberB}
    </>
};
