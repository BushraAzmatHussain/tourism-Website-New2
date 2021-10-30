import React from 'react';
import About from '../../About/About';
import Footer from '../../Shared/Footer/Footer';
import Destinations from '../Destinations/Destinations';
import Teams from '../Teams/Teams';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Destinations></Destinations>
            <Footer></Footer>
        </div>
    );
};

export default Home;