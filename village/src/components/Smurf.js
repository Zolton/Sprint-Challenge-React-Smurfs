import React from "react";
import axios from "axios";

const Smurf = props => {
  return (
    //console.log(props.gargamelWins),
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.gargamelWins(props.id)}>
        Delete Smurf ID # {props.id}
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
