import "./App.css";
import React, { Component } from "react";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 70 },
      { name: "Soph", age: 17 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = () => {
    //Do not do this!!! : state.persons[0].name = 'Maximun';
    this.setState({
      persons: [
        { name: "Maximiliano", age: 28 },
        { name: "Manuel", age: 20 },
        { name: "Sophie", age: 17 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hi I am react app</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          My hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
