import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    
    

    useEffect(() =>{
         fetch('https://grim-spell-21442.herokuapp.com/orders')
         .then(res => res.json())
         .then(data =>setOrders(data));
    })

    //Delete
    const handleDeleteUser = id =>{
        const proceed = window.confirm('Are you sure you want to delete the information?');
        if(proceed){
            const url =`https://grim-spell-21442.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('Deleted Successfully!');
                const remainingOrders = orders.filter(order =>order._id!==id);
                setOrders(remainingOrders); 
            }
        })
        }

    }
   
    return (
        <div>
            <h2 className="p-5 fw-bold">Users Number: {orders.length}</h2>
            
            <h3  className="p-5 fw-bold">Users Informations and Booking Information</h3>
            {
                orders.map(orders => <li className="fw-bold p-2 "
                key = {orders._id}
                >Name:{orders.Name}::Email: {orders.email}::Wants to visit: {orders.places}
                <Link to={`/orders/manageBookings/${orders._id}`}><button>Update</button></Link>
                <button onClick={() => handleDeleteUser(orders._id)}>delete</button>
                </li>)
            }
            
        </div>
    );
};

export default MyOrder;