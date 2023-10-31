import React from "react";
import Card from "../containers/Card";

/* const Cardlist = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });
  return (<>{cardComponent}</>);
}; */
const Cardlist = ({ robots }) => {
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
