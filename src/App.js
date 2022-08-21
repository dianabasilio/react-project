import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person";

function App() {
  const [personState, setPersonState] = useState({
    people: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 70 },
      { name: "Soph", age: 17 },
    ],
  });

  const [showPerson, setShowPerson] = useState(false);

  const togglePersonsHandler = (newName) => {
    //Do not do this!!! : state.people[0].name = 'Maximun';
    setPersonState({
      people: [
        { name: newName, age: 28 },
        { name: "Manuel", age: 20 },
        { name: "Sophie", age: 17 },
      ],
    });
    setShowPerson(!showPerson);
  };

  const nameChangeHandler = (event) => {
    setPersonState({
      people: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 20 },
        { name: "Sophie", age: 17 },
      ],
    });
  };

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };

  let people = null;

  if (showPerson) {
    people = (
      <div>
        <Person
          name={personState.people[0].name}
          age={personState.people[0].age}
        />
        <Person
          name={personState.people[1].name}
          age={personState.people[1].age}
          click={() => togglePersonsHandler("Max!")}
          changed={nameChangeHandler}
        />
        <Person
          name={personState.people[2].name}
          age={personState.people[2].age}
        >
          My hobbies: Racing
        </Person>
      </div>
    );
  }

  //Arrow functions are part of ES6. If you're not using ES6, then you have to bind this. That's one difference I can think of between the two.
  return (
    <div className="App">
      <h1> Hi I am react app</h1>
      <button style={style} onClick={() => togglePersonsHandler("Maximiliano")}>
        Switch name
      </button>
      {people}
    </div>
  );
}

export default App;
