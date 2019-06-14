import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount () {
    axios
    .get("http://localhost:3333/smurfs")
    // .then(res=>console.log(res))
    // .then(res=>console.log(res.data))
    .then(res=>this.setState({smurfs: res.data}))
  }

  addSmurf = newSmurf => {
    axios
    .post("http://localhost:3333/smurfs", newSmurf)
    .then(res=>this.setState({smurfs: res.data}))
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log("this is smurfs")
    console.log(this.state.smurfs)
    return (
      <div className="App">
        <NavLink to="/" activeClassName="gabba">Home</NavLink>
        <NavLink to="/smurf-form" activeClassName="gabba">Add a Smurf</NavLink>
        <Route path="/smurf-form" render = {()=> <SmurfForm addSmurf={this.addSmurf} /> 
        } />
        <Route exact path = "/" render={()=> <Smurfs smurfs={this.state.smurfs} />
          } />

            
          
        
      </div>
    );
  }
}

export default App;
