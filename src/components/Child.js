import React from "react";

const Child = props => {
  const { child, onChildClick } = props;

  return (
    <div>
      <h1 data-test="firstName">{child.firstName}</h1>
      <h2 data-test="lastName">{child.lastName}</h2>
      <div>
        <button data-test="counter-button" onClick={onChildClick}>
          click me
        </button>
      </div>
    </div>
  );
};

export default Child;
