import React from "react";

export const Error = ({ message }) => {
  return (
    <div>
      <h2>Error:</h2>
      <p>{message}</p>
    </div>
  );
};
