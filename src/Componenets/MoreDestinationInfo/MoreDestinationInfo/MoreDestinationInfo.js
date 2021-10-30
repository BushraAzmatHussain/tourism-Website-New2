import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import {Link} from 'react-router-dom';

const MoreDestinationInfo = () => {
    const {destinationId} = useParams();
    const [destination, setDestination] = useState({})

    useEffect(() =>{
        fetch(`http://localhost:5000/destinations/${destinationId}`)
        .then(res => res.json())
        .then(data => setDestination(data));
    },[])
    
    return (
        
        <div className="p-5">
            <h2 className="fw-bold p-5">{destination.Name}</h2>
            <img src={destination.img} alt="" />
            <div className="p-5 m-5">
            <p>{destination.description}</p>
            <p>{destination.details}</p>
            </div>
            <h2 className="fw-bold text-primary p-3">BDT {destination.price}</h2>
            <Link to="/">
            <button className="btn btn-dark fw-bold">Visit Now</button>
            </Link>
                      
        
        </div>
    );
};

export default MoreDestinationInfo;






