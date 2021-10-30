import React from 'react';
import Destinations from '../Destinations/Destinations';
import Teams from '../Teams/Teams';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Destinations></Destinations>
            <Teams></Teams>
        </div>
    );
};

export default Home;