import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <h1> Hi I am react app</h1>
      <Person name="Max" age={28} />
      <Person name="Manuel" age={30} />
    </div>
  );
}

export default App;
