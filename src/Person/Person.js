import React from 'react'

const Person = (props) =>{
    //this jsx sintax is transform to react create element, to call this method we need
    //to import react
    return (
      <div>
        <p onClick={props.click}>
          I'm {props.name} and I am years {props.age} old!
        </p>
        <p>
            {props.children}
        </p>
        <input type="text" onChange={props.changed} />
      </div>
    );
}

export default Person;