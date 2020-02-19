import React from "react";
import Parent from "./Parent";

const parent = {
  firstName: "James",
  lastName: "Duong"
};

const onParentClick = () => {
  console.log("clicked");
};

const App = () => {
  return (
    <div>
      <Parent parent={parent} onClick={onParentClick} />
    </div>
  );
};

export default App;
