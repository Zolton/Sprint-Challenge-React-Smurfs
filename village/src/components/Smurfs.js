import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    //console.log(this.props.gargamelWins)
    return (
      console.log(this.gargamelWins),
      (
        <div className="Smurfs">
          <h1>Smurf Village</h1>
          <ul>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  gargamelWins={this.props.gargamelWins}
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              );
            })}
          </ul>
        </div>
      )
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
