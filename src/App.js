import "./App.css";
import Person from "./Person/Person";

function App() {
  const state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 70 },
      { name: "Soph", age: 17 },
    ],
  };

  const switchNameHandler = () =>{
    //Do not do this!!! : state.persons[0].name = 'Maximun';
  }

  return (
    <div className="App">
      <h1> Hi I am react app</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age} />
      <Person name={state.persons[2].name} age={state.persons[2].age}>
        My hobbies: Racing
      </Person>
    </div>
  );
}

export default App;
