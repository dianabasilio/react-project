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

  const switchNameHandler = (newName) => {
    //Do not do this!!! : state.persons[0].name = 'Maximun';
    setPersonState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manuel", age: 20 },
        { name: "Sophie", age: 17 },
      ]
    });
  };

  const nameChangeHandler = (event) =>{
    setPersonState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 20 },
        { name: "Sophie", age: 17 },
      ]
    });
  }

  //Arrow functions are part of ES6. If you're not using ES6, then you have to bind this. That's one difference I can think of between the two. 
  return (
    <div className="App">
      <h1> Hi I am react app</h1>
      <button onClick={() => switchNameHandler('Maximiliano')}>Switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        click={() => switchNameHandler('Max!')}
        changed={nameChangeHandler}
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
