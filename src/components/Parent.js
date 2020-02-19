import React from "react";
import Child from "./Child";

const child = {
  firstName: "Child firstname",
  lastName: "Child secondname"
};

const Parent = props => {
  const { parent, onClick } = props;
  return (
    <div>
      <h1 data-test="firstName">{parent.firstName}</h1>
      <h2 data-test="lastName">{parent.lastName}</h2>
      <Child child={child} onChildClick={onClick} />
    </div>
  );
};

export default Parent;
