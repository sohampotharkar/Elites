import React from "react";
import Card from "./Card";

/* const Cardlist = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });
  return (<>{cardComponent}</>);
}; */
const Cardlist = ({ robots }) => {
  /*  if(true) {
    throw new Error('Noooo!')
  } */
  return (
    <>
      {robots.map((user, i) => (
        <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
      ))}
      ;
    </>
  );
};

export default Cardlist;
