import React, { useEffect, useState } from 'react';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() =>{
        fetch('https://grim-spell-21442.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));

    },[])
    return (
        <div id="orders">
            <h2>Users Information and order details</h2>
            <div className= "order-container">
                
            {/* {
                orders.map(order => <MyOrder
                key={order.id}
                order={order}
                ></MyOrder>)
            } */}
        </div>
        </div>
    );
};

export default MyOrders;