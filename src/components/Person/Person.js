import React from 'react';
import './Person.css'
const Person = (props) => {
    console.log(props)
    // const {region, area, population, name} = props?.country;
    return (
        <div className='container'>
            <h1>Country Name:{props.name}</h1>
            <p>population: {props.population}</p>
            <h4>area: {props.area}</h4>
            <p><small>region: {props.region}</small></p>
        </div>
    );
};

export default Person;