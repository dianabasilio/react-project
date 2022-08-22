import "./App.css";
import React, { useState, useEffect } from "react";
import Person from "./Person/Person";

function App() {
  const [personState, setPersonState] = useState([
    { id: 0, name: "Max", age: 28 },
    { id: 1, name: "Manu", age: 70 },
    { id: 2, name: "Soph", age: 17 },
  ]);

  const [showPerson, setShowPerson] = useState(false);

  const togglePersonsHandler = (newName) => {
    //Do not do this!!! : state.people[0].name = 'Maximun';
    setPersonState([
      { id: 0, name: newName, age: 28 },
      { id: 1, name: "Manuel", age: 20 },
      { id: 2, name: "Sophie", age: 17 },
    ]);
    setShowPerson(!showPerson);
  };

  const nameChangeHandler = (event, id) => {
    //this will find the index where the condition is true
    const personIndex = personState.findIndex((person) => {
      return person.id === id;
    });

    //this will get the person with that index
    const person = { ...personState[personIndex] };
    //otherway
    //const person = Object.assign({}, personState[personIndex])

    //this will change the person name
    person.name = event.target.value;

    const people = [...personState];
    people[personIndex] = person;

    setPersonState(people);
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personState];
    //splice, index to remove, how many to remove
    persons.splice(personIndex, 1);
    setPersonState(persons);
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
        {personState.map((person, index) => {
          return (
            <Person
              click={() => deletePersonHandler(index)}
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => nameChangeHandler(event, person.id)}
            />
          );
        })}
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
