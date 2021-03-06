
import React from 'react';

const Person = (props) => {
    return (
    <div>
    <p onClick={props.click}>I'm a {props.name} and I am {props.age}</p>
    <p>{props.children}</p>
    <input onChange={props.nameChangedHandler}type="text"/>
    </div>
    )
};

export default Person;