import React from "react";

const UserInput = (props) => {
  const style = {
    border: "2px solid red",
  };

  return (
    <input
      style={style}
      type="text"
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default UserInput;
