import React, { useEffect, useState } from 'react';
import Destination from '../Destination/Destination';
import './destinations.css';

const Destinations = () => {
    const [destinations, setDestinations] = useState([])
    useEffect(()=>{
        fetch('https://grim-spell-21442.herokuapp.com/destinations')
        .then(res=> res.json())
        .then(data=> setDestinations(data));
    }, [])
    return (
        <div id="destinations">
            <h2 className="fw-bold p-5 m-5">Countries To Visit</h2>
            <div className= "destination-container">
            {
                destinations.map(destination => <Destination
                key={destination.id}
                destination={destination}
                ></Destination>)
            }
        </div>
        </div>
    );
};

export default Destinations;