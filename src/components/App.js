import React from "react";

const App = ({ user }) => (
  <div>
    <h1 data-test="firstName">{user.firstName}</h1>
    <h2 data-test="lastName">{user.lastName}</h2>
  </div>
);

export default App;
