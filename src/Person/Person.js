import React from 'react'

const Person = (props) =>{
    //this jsx sintax is transform to react create element, to call this method we need
    //to import react
    return (
      <div>
        <p>
          I'm {props.name} and I am years {props.age} old!
        </p>
        <p>
            {props.children}
        </p>
      </div>
    );
}

export default Person;