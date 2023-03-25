import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Countris = () => {
    const [countris, setCountris] = useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountris(data))

    },[])

    return (
        <div>
            <h1>Hello from Countries:{countris.length}</h1>
         {
            countris.map(country => console.log(country))
         }
         {
            countris.map(country => <Person
                country={country}
                name={country.name.common}
                population={country.population}
                area={country.area}
                region={country.area}
                 ></Person>)
         }
        </div>
    );
};

export default Countris;