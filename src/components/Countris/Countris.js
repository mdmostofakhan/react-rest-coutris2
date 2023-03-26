import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Countris.css';

const Countris = () => {
    const [countris, setCountris] = useState([]);

    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountris(data))

    },[])

    return (
        <div>
            <h2>Hello from my of the  country Countries:{countris.length}</h2>
        <div className='countris-container'>
        {
            countris.map(country => <Person country={country}
                key={country.cca3}
            ></Person>)
               
         }
        </div>
        </div>
    );
};

export default Countris;