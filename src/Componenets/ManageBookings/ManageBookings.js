import React, { useEffect, useState } from 'react';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() =>{
        fetch('https://grim-spell-21442.herokuapp.com/destinations/')
        .then(res => res.json())
        .then(data => setBookings(data))

    }, [])
    return (
        <div>
            <h2>Manage All Bookings</h2>
        </div>
    );
};

export default ManageBookings;