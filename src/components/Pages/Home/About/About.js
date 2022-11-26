import React from 'react';
import img from '../../../../assets/homepageImg/saree1.jpg'


const About = () => {
    return (
        <div className="hero  min-h-screen  mt-12 w-5/6 mx-auto rounded" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" mt-60 max-w-md">
            <h1 className="mb-5 text-4xl text-white font-bold">Welcome Our Online Shop</h1>
            <p className="mb-5 text-white text-xl">Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase .</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default About;