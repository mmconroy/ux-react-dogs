// Dog.js
import React from "react";

function Dog(props) {
  return (
    <div>
      {props.dog.name} the {props.dog.type}
    </div>
  );
}

export default Dog;
