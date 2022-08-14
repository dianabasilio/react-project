import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person";

function App() {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 70 },
      { name: "Soph", age: 17 },
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(otherState, personState);

  const switchNameHandler = () => {
    //Do not do this!!! : state.persons[0].name = 'Maximun';
    setPersonState({
      persons: [
        { name: "Maximiliano", age: 28 },
        { name: "Manuel", age: 20 },
        { name: "Sophie", age: 17 },
      ]
    });
  };

  return (
    <div className="App">
      <h1> Hi I am react app</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={switchNameHandler}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      >
        My hobbies: Racing
      </Person>
    </div>
  );
}

export default App;
