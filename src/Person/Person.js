import React from 'react'
import './Person.css'

const Person = (props) =>{
    //this jsx sintax is transform to react create element, to call this method we need
    //to import react
    return (
      <div className="Person">
        <p onClick={props.click}>
          I'm {props.name} and I am years {props.age} old!
        </p>
        <p>
            {props.children}
        </p>
        <input type="text" onChange={props.changed} value={props.name} />
      </div>
    );
}

export default Person;