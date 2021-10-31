import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams} from 'react-router';
import {Link} from 'react-router-dom';
import './moreDestinationInfo.css';

const MoreDestinationInfo = () => {
    const {destinationId} = useParams();
    const [destination, setDestination] = useState({});
    const { register, handleSubmit, reset } = useForm();

    useEffect(() =>{
        fetch(`https://grim-spell-21442.herokuapp.com/destinations/${destinationId}`)
        .then(res => res.json())
        .then(data => setDestination(data));
    },[]);

   

    const onSubmit = data =>{
        console.log(data);
        axios.post('https://grim-spell-21442.herokuapp.com/orders',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Booking places successfully!');
                reset();
            }
        })

    }
    
    return (
        
        <div className=" p-5">
            <h2 className="fw-bold p-5">{destination.Name}</h2>
            <img src={destination.img} alt="" />
            <div className="p-5 m-5">
            <p>{destination.description}</p>
            <p>{destination.details}</p>
            </div>
            <h2 className="fw-bold text-primary p-3">BDT {destination.price}</h2>
            
        <div className="add-order p-5 m-5">
                    
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
            <input {...register("email")} placeholder="Email" />
            <input {...register("address")} placeholder="Address" />
            <input type="number" {...register("phone number")} placeholder=" Contact Number"  />
            <input {...register("places")} placeholder="Whice Places you want to visit?" />
            <input type="number" {...register("Number of places")} placeholder=" Number of places you want to visit"  />
            <input type="submit" />
        </form>
            

        </div>

            
                      
        
        </div>
    );
};

export default MoreDestinationInfo;






