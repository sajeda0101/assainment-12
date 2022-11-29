import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import useTitle from '../../UseTitle/UseTitle';
import About from './About/About';
import AdvertisedItem from './AdvertisedItem/AdvertisedItem';
import Footer from './footer/Footer';
import SecondHandProducts from './SecondProducts/SecondHandProducts';

const Home = () => {
    const {loading}=useContext(AuthContext)
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