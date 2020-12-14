import React from "react";
import { useSelector } from "react-redux";

export const ErrorMessages = () => {
  const errorData = useSelector((state) => state.root.fetchError);
  const { name, message } = errorData;

  if (!name || !message) {
    return null;
  }

  return (
    <div>
      <h2>Error: {name}</h2>
      <p>{message}</p>
    </div>
  );
};
