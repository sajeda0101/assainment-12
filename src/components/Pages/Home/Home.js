import React from 'react';
import useTitle from '../../UseTitle/UseTitle';
import About from './About/About';
import AdvertisedItem from './AdvertisedItem/AdvertisedItem';
import Footer from './footer/Footer';
import SecondHandProducts from './SecondProducts/SecondHandProducts';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <About/>
            <AdvertisedItem/>
            <SecondHandProducts/>
            <Footer/>
        </div>
    );
};

export default Home;