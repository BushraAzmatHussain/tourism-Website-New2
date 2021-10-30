import React from 'react';
import { Link } from 'react-router-dom';
import './destination.css';

const Destination = ({destination}) => {
    const {id, name , description , img} = destination;
    return (
        <div className="destination p-3">
            <img src={img} alt="" />
            <h3 className="mt-4 fw-bold">{name}</h3>
            <p className="p-3">{description}</p>
            <Link to={`/destination/${id}`}>
            <button type="button" className="btn btn-dark fw-bold">View More</button>
            </Link>
        </div>
    );
};

export default Destination;