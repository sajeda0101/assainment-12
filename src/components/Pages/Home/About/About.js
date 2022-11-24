import React from 'react';
import img from '../../../../assets/homepageImg/baby.jpg'

const About = () => {
    return (
        <div>
            <div className="carousel max-w-7xl h-96 mx-auto mt-5 rounded">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img} className="w-full" />
   
    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-12 top-2/4">
    <h1 className='text-4xl text-white'>This is our site</h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-12  bottom-0">
      <a href="#slide4" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
</div>
        </div>
    );
};

export default About;