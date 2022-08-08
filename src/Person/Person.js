import React from 'react'

const Person = () =>{
    //this jsx sintax is transform to react create element, to call this method we need
    //to import react
    return <p>I'm a person and I am years {Math.floor(Math.random()*30)} old!</p>
}

export default Person;