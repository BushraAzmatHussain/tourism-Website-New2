import React, { useEffect, useState } from 'react';

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
            <h2>Users Number: {orders.length}</h2>
            
            <h2>Users Informations and Booking Information</h2>
            {
                orders.map(orders => <li
                key = {orders._id}
                >Name:{orders.Name}::Email: {orders.email}::Wants to visit: {orders.places}
                <button>update</button>
                <button onClick={() => handleDeleteUser(orders._id)}>delete</button>
                </li>)
            }
            
        </div>
    );
};

export default MyOrder;