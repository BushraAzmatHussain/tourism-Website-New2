import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router';
import {Link} from 'react-router-dom';

const MoreDestinationInfo = () => {
    const {destinationId} = useParams();
    const [detail ,setDetail] = useState([]);
    useEffect(()=>{
        fetch('/destinations.json')
        .then(response => response.json())
        .then(data => {
            const item = data?.find(item => parseInt(item.id) === parseInt(destinationId));
            setDetail(item);
        });
    },[]);
    return (
        <div className="background">
            
            <h2 className="fw-bold p-5">{detail?.name}</h2>
            <img src={detail?.img} alt="" />
            <div className="p-5 m-5">
            <p >{detail?.description}</p>
            <p>{detail?.details}</p>
            
            <Link to="/">
            <button className="btn btn-dark fw-bold">Visit Now</button>
            </Link>
            </div>
        </div>
    );
};

export default MoreDestinationInfo;