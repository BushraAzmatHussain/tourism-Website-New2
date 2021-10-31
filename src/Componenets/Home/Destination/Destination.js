import React from 'react';
import { Link } from 'react-router-dom';
import './destination.css';

const Destination = ({destination}) => {
    const {_id, Name , description ,price, img} = destination;
    return (
        <div className="destination p-3">
            <img src={img} alt="" />
            <h3 className="mt-4 fw-bold">{Name}</h3>
            <p className="p-3">{description}</p>
            <h5 className="p-3 fw-bold">BDT {price}</h5>
            <Link to={`/destination/${_id}`}>
            <button type="button" className="btn btn-dark fw-bold">Visit Now</button>
            </Link>
        </div>
    );
};

export default Destination;