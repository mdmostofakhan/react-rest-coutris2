import React from 'react';
import './Person.css'

const Person = (props) => {
    // const {area, region} = props.country;
  console.log(props.country)
    return (
        <div className='container bg-warning'>
            <h2>Name:{props.country?.name.common}</h2>
        <img src={props.country?.flags?.png} alt="" />
            <p>Area:{props.country?.area}</p>
            <p>Region:{props.country?.region}</p>
          
        </div>
    );
};

export default Person;